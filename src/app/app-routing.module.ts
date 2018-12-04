import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent, SECURE_ROUTES, PublicComponent, PUBLIC_ROUTES } from './_layout';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: SecureComponent, children: SECURE_ROUTES},
  {path: '', component: PublicComponent, children: PUBLIC_ROUTES},
  {path: 'home', component: HomeComponent},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
