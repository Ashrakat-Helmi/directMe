import { AuthService } from './../../sharedService/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });
  constructor(public _authService: AuthService, public _router: Router) { }

  submitLoginForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._authService.login(loginForm.value).subscribe((response) => {
        if (response.Message = 'Success') {
          localStorage.setItem('userToken', response.token);
          this._authService.saveUserData();
          this._router.navigate(['home']);
        } else {
          this.error = response.Message;
        }
      });
    }
  }


  ngOnInit(): void {
  }

}
