import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './Shared/navbar/signup/signup.component';

const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'login' , component:ForgotPasswordComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
