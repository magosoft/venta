import { Routes } from '@angular/router';
import { ClientsEditComponent } from './pages/clients-edit/clients-edit.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'clientes', component: ClientsListComponent },
    { path: 'cliente', component: ClientsEditComponent },
    { path: 'cliente/:id', component: ClientsEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];
