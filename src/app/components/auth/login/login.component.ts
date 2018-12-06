import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forbiddenEmail = ['unni@unni.com'];
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.checkForbiddenEmails.bind(this)]),
      'password': new FormControl(null, Validators.required),
      'hobbies': new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.loginForm);
  }
  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.loginForm.get('hobbies')).push(control);
  }
  checkForbiddenEmails(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenEmail.indexOf(control.value) !== -1) {
      return {'emailIsForbidden': true};
    }
    return null;
  }
}
