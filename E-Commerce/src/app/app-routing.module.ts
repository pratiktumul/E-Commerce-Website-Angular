import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './Shared/navbar/forgot-password/forgot-password.component';
import { LoginComponent } from './Shared/navbar/login/login.component';
import { HomeComponent } from './Admin/Home/home/home.component';

import { ProductsComponent } from './Shared/Products/products/products.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './Shared/navbar/signup/signup.component';

const routes: Routes = [
  {path: '',redirectTo:'Home', pathMatch:'full'},
  {path:'Home',component:HomeComponent},

  {path:'Products',component:ProductsComponent}, 

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
