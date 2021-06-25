import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

   
    
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
      // ---------------------------------------validations--------------------------------------//
      
          this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
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
      
      
  


