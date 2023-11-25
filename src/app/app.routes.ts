import { Routes } from '@angular/router';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';

export const routes: Routes = [
    {path:'clientes',component:ClientsListComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];
