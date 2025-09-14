import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    loadChildren: () => [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./main-layout/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
];
