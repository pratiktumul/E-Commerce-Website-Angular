import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   registerForm: any;

  constructor() { }
  addUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user , ... users]
    
  } else{
    users = [user];
  }
   localStorage.setItem('Users' , JSON.stringify (users))
  }





  get firstname() {
    return this.registerForm.get('Firstname') as FormControl;
  }
  get lastname() {
    return this.registerForm.get('lastname') as FormControl;
  }
  get email() {
    return this.registerForm.get('Email') as FormControl;
  }
  get password() {
    return this.registerForm.get('Password') as FormControl;
  }
   
  
  
}

