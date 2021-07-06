import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerationForm: any;

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
    return this.registerationForm.get('Firstname') as FormControl;
  }
  get lastname() {
    return this.registerationForm.get('lastname') as FormControl;
  }
  get email() {
    return this.registerationForm.get('Email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('Password') as FormControl;
  }
   
  
  
}

