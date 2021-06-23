import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { ForgotPasswordComponent } from './Shared/navbar/forgot-password/forgot-password.component';
import { LoginComponent } from './Shared/navbar/login/login.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { ProductsComponent } from './Shared/Products/products/products.component';

const routes: Routes = [
  {path: '',redirectTo:'UserHome', pathMatch:'full'},
  { path: 'UserHome' , component:UserHomeComponent},
  {path:'Products',component:ProductsComponent}, 
  { path: 'AdminHome' , component:AdminHomeComponent},
  { path: 'login' , component:LoginComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'login' , component:ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
