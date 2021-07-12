import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './Shared/navbar/forgot-password/forgot-password.component';
import { LoginComponent } from './Shared/navbar/login/login.component';
import { HomeComponent } from './Admin/Home/home/home.component';

import { ProductsComponent } from './Shared/Products/products/products.component';
import { DashboardComponent } from './Admin/Dashboard/dashboard/dashboard.component';
import { SignupComponent } from './Shared/navbar/signup/signup.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { OrderListComponent } from './Admin/OrderList/order-list/order-list.component';
import { StocksComponent } from './Admin/Stocks/stocks/stocks.component';
import { TotalOrderComponent } from './Admin/TotalOrder/total-order/total-order.component';
import { SettingsComponent } from './Admin/Settings/settings/settings.component';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch:'full'},
  
  {path:'Home',component:DashboardComponent, canActivate: [AuthGuardGuard]},

  {path:'Products',component:ProductsComponent},
  {path:'Settings',component:SettingsComponent},
  {path:'OrderList',component:OrderListComponent}, 
  {path:'Stocks',component:StocksComponent},
  {path:'TotalOrder',component:TotalOrderComponent},
  {path:'Dashboard',component:DashboardComponent}, 
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
