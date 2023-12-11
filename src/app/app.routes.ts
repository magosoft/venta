import { Routes } from '@angular/router';
import { ClientsEditComponent } from './pages/clients-edit/clients-edit.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [

    { path: '', component: LandingComponent },
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'clientes', component: ClientsListComponent },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
