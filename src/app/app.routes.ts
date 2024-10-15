import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'kanban', loadChildren: () => import('./pages/kanban/kanban.routes').then(m => m.KANBAN_ROUTES) },
  { path: '**', redirectTo: 'kanban', pathMatch: 'full' },
];
