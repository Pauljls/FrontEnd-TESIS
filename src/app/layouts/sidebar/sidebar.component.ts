import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menulist = signal([
    { label: 'Inicio', icon: '/icons/home.svg' },
    { label: 'Asesores', icon: '/icons/users.svg' },
    { label: 'Plantillas', icon: '/icons/file.svg' }
  ]);
}