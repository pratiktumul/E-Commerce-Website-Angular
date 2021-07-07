import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { ILogin } from 'src/app/Interfaces/ilogin';
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
  hide = true;
  message: string;  
  returnUrl: string;
  isAdmin:boolean;
    submitted = false;
    loading=false;
    hide = true;
    

  constructor(private formBuilder:FormBuilder,
   private route:ActivatedRoute,
   private router:Router,
   private accountService:AccountService,
   private alertService:AlertService) {
  constructor(private formBuilder:FormBuilder, private service: AccountService,private router: Router) {
   }

   model: ILogin= {userName:"admin@gmail.com", passWord:"admin@123"}

  ngOnInit(): void {
// ---------------------------------------validations--------------------------------------//
    this.isAdmin=false;
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
      this.isAdmin=true;

      //reset alert on submit
      this.alertService.clear();

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
          console.log(this.message);
        }
      }

      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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













 
