import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'login' , component:ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
