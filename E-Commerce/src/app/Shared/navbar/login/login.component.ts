import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountServices } from 'src/app/_services/account.service';
import { AlertService } from 'src/app/_services/alert.service';
import { ILogin } from 'src/app/Interfaces/ilogin';
import { AccountService } from 'src/app/Services/account.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    message:string;
    isAdmin=false;
    returnUrl:string;
    returnUrls: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service:AccountService,
        private accountService: AccountServices,
        private alertService: AlertService
    ) { }
    model: ILogin= {username:"admin@gmail.com", password:"admin@123"}

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl= '/Home';
        this.accountService.logout();
        this.returnUrls='/user-home';
        this.service.logout();
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        else{
            if(this.f.username.value==this.model.username&& this.f.password.value==this.model.password){
  
                localStorage.setItem('isLoggedin',"true");
                localStorage.setItem('token',this.f.username.value);
                this.router.navigate([this.returnUrl]);
              }
            else{
        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrls'] || '/';
                    this.router.navigateByUrl(this.returnUrls);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
        }
    }
}
}
