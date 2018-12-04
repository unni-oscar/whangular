import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/auth/login/login.component';

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path:'login', component: LoginComponent}
]