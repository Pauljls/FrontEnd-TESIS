import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./modules/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
