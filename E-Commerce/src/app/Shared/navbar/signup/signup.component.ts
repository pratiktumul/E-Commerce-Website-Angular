import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   
  constructor(private fb:FormBuilder  , private userService : UserService ) { }

  
  user: any = {};
  registerForm: FormGroup;
  

  ngOnInit(): void {


    this.createRegisterationForm();

  }
 
 
    
  createRegisterationForm(){

    this.registerForm = this.fb.group({

      firstname: [null, Validators.required ],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null , [Validators.required]]
 

    })

   
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :

    {notmatched:true};
  }

  

  
  onSubmit(){


    if(this.registerForm.valid){
    console.log(this.registerForm.value);
 
    this.user = Object.assign(this.user , this.registerForm.value);
     this.userService.addUser(this.user)    
     this.registerForm.reset();
  }
  }
 

  
};
