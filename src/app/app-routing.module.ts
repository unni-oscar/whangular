import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent, SECURE_ROUTES, PublicComponent, PUBLIC_ROUTES } from './_layout';

const routes: Routes = [
  {path: '', component: SecureComponent, children: SECURE_ROUTES},
  {path: '', component: PublicComponent, children: PUBLIC_ROUTES},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
