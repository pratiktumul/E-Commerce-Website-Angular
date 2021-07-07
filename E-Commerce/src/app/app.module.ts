import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Shared/navbar/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './Shared/navbar/forgot-password/forgot-password.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { SignupComponent } from './Shared/navbar/signup/signup.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

import { AlertComponent } from './_components/alert.component';
import { ProductsComponent } from './Shared/Products/products/products.component';
import { HomeComponent } from './Admin/Home/home/home.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { ProductComponent } from './Products/product/product.component';
import { DashboardComponent } from './Admin/Dashboard/dashboard/dashboard.component';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import {  ErrorInterceptor } from './_helpers/error.interceptor';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AppComponent,
    NavbarComponent,
    SignupComponent,
    ProductsComponent,
    HomeComponent,
    UserHomeComponent,
    ProductComponent,
    DashboardComponent,
    AlertComponent
    //AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  MaterialModule;
}
