import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'password': new FormControl(null,[Validators.required])
    })
    // this.registerForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.registerForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }
  onSubmit() {
    console.log(this.registerForm);
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden' : true});
        } else {
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
