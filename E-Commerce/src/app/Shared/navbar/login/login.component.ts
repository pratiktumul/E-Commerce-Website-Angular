import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';
import { AlertService } from 'src/app/_services/alert.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
    submitted = false;
    loading=false;
    hide = true;
    

  constructor(private formBuilder:FormBuilder,
   private route:ActivatedRoute,
   private router:Router,
   private accountService:AccountService,
   private alertService:AlertService) {
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

      //reset alert on submit
      this.alertService.clear();

       if (this.registerForm.invalid) {
          return;
      }
      this.loading = true;
        this.accountService.login(this.f.username?.value, this.f.password?.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });

       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


   
    
};













 
