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

import { ProductsComponent } from './Shared/Products/products/products.component';
import { HomeComponent } from './Admin/Home/home/home.component';

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
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  MaterialModule;
}
