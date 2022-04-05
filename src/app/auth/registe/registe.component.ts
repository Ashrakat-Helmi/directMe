import { AuthService } from './../../sharedService/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registe',
  templateUrl: './registe.component.html',
  styleUrls: ['./registe.component.css']
})
export class RegisteComponent implements OnInit {
  error: string;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });
  constructor(public _authService: AuthService , public _router:Router) { }


  submitRegisterForm(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._authService.signUp(registerForm.value).subscribe((response) => {
        if (response.Message = 'Added user') {
          this._router.navigate(['login']);
        } else {
          this.error = response.Message;
        }
      });
    }
  }


  ngOnInit(): void {
  }

}
