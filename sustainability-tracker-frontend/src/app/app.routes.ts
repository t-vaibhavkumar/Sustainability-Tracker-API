import { Routes } from '@angular/router';
import { AddActionComponent } from './components/add-action.component';
import { ActionsListComponent } from './components/actions-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/actions-list', pathMatch: 'full' },  // Default homepage
  { path: 'add-action', component: AddActionComponent },  // Add action page
  { path: 'actions-list', component: ActionsListComponent }  // View all actions
];
