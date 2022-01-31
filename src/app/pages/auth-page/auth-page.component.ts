import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';



@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthenticatedComponent {
  authForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  login() {

  }

  register() {

  }

  get usernameForm() {
    return this.authForm.get('username');
  }

  get passwordForm() {
    return this.authForm.get('password');
  }
}

