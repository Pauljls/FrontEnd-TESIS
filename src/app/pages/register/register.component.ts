import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  currentStep = 1;
  showPassword = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // Datos personales
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidoPaterno: ['', [Validators.required, Validators.minLength(2)]],
      apellidoMaterno: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      
      // Datos de tesis
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      codigo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      modalidadTesis: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.isStepValid(1) && this.currentStep === 1) {
      this.currentStep = 2;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep = 1;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isStepValid(step: number): boolean {
    if (step === 1) {
      const personalFields = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'fechaNacimiento', 'genero', 'numeroDocumento'];
      return personalFields.every(field => 
        this.registerForm.get(field)?.valid
      );
    }
    return true;
  }

  getFieldError(fieldName: string): string {
    const field = this.registerForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldDisplayName(fieldName)} es requerido`;
      if (field.errors['email']) return 'Formato de correo inválido';
      if (field.errors['minlength']) return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['pattern']) {
        if (fieldName === 'numeroDocumento') return 'Debe tener 8 dígitos';
        if (fieldName === 'codigo') return 'Debe tener 10 dígitos';
      }
    }
    return '';
  }

  getFieldDisplayName(fieldName: string): string {
    const names: {[key: string]: string} = {
      'nombre': 'Nombre',
      'apellidoPaterno': 'Apellido Paterno',
      'apellidoMaterno': 'Apellido Materno',
      'fechaNacimiento': 'Fecha de Nacimiento',
      'genero': 'Género',
      'numeroDocumento': 'Número de Documento',
      'correo': 'Correo',
      'contrasena': 'Contraseña',
      'codigo': 'Código',
      'modalidadTesis': 'Modalidad de Tesis'
    };
    return names[fieldName] || fieldName;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Datos del formulario:', this.registerForm.value);
      // Aquí iría la lógica para enviar los datos al servidor
      alert('¡Registro exitoso!');
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }
}