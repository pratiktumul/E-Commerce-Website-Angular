import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  constructor(  private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
  });
  }

  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

     if (this.form.invalid) {
        return;
    }

     alert('SUCCESS!! :-)\n\n' + "OTP sent to ur email");
}

 



}
