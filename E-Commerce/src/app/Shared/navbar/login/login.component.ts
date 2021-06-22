import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
    submitted = false;

    hide = true;
    

  constructor(private formBuilder:FormBuilder) {
   }

  ngOnInit(): void {
// ---------------------------------------validations--------------------------------------//

    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.compose([ Validators.required , Validators.email]) ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
    });

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

       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


   
    
};













 
