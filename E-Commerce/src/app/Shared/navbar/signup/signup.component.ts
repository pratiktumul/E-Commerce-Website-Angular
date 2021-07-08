import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountServices } from 'src/app/_services/account.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
   loading=false;
    

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private accountService:AccountServices,
    private alertService:AlertService) { }

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
        this.loading = true;
        this.accountService.Signup(this.registerForm.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
       
       //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }
  
        onReset() {
            this.submitted = false;
            this.registerForm.reset();
        }
      };
      
      
  


