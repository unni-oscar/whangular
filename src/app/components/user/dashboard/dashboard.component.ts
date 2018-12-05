import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('f') signupForm : NgForm;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: '',
    secret: ''
  };
  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }
  onSubmit(form: NgForm) {
    // console.log(this.signupForm)
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.signupForm.reset();
  }
  suggestedUsername() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

}
