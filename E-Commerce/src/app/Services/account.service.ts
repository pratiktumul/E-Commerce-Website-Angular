import { Injectable } from '@angular/core';
import { ILogin } from '../Interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  logout(): void {
    localStorage.setItem('isLoggedin','false');
    localStorage.removeItem('token');
  }
}
