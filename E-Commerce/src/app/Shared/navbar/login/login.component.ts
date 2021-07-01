import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { ILogin } from 'src/app/Interfaces/ilogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  hide = true;
  message: string;  
  returnUrl: string;
    

  constructor(private formBuilder:FormBuilder, private service: AccountService,private router: Router) {
   }

   model: ILogin= {userName:"admin@gmail.com", passWord:"admin@123"}

  ngOnInit(): void {
// ---------------------------------------validations--------------------------------------//

    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.compose([ Validators.required , Validators.email]) ],
      passWord: ['', [Validators.required, Validators.minLength(6)] ],
    });

    this.returnUrl= '/Home';
    this.service.logout();

  }
  get f() { 
    return this.registerForm.controls;
   }

  //  ------------------------------------button functions-----------------------------  //

  onSubmit() {
      this.submitted = true;

       if (this.registerForm.invalid) {
          return;
      }
      else {
        if(this.f.userName.value==this.model.userName&& this.f.passWord.value==this.model.passWord){
  
          localStorage.setItem('isLoggedin',"true");
          localStorage.setItem('token',this.f.userName.value);
          this.router.navigate([this.returnUrl]);
        }
        else{
          this.message="Please check Credentials";
        }
      }

      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


   
    
};













 
