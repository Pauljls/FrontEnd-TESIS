import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  menulist = signal([
    { label: 'Inicio', icon: '/icons/home.svg' },
    { label: 'Asesores', icon: '/icons/users.svg' },
    { label: 'Plantillas', icon: '/icons/file.svg' },
  ]);
}
