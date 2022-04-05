import { AuthService } from './../../sharedService/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {

  error: string;
  mentorForm: FormGroup = new FormGroup({
    fname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl(null, [Validators.required]),
    langSpeak: new FormControl(null, [Validators.required]),
    jobTitle: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    company: new FormControl(null, [Validators.required]),
    industry: new FormControl(null),
    website: new FormControl(null),
    profileDescription : new FormControl(null, [ Validators.required]),
    linkedin :new FormControl (null , [ Validators.required]),
    phone : new FormControl (null , [ Validators.required ,Validators.minLength(11), Validators.maxLength(11)]),
    primaryFieldOfExpertise : new FormControl (null, [ Validators.required]),
    secondaryFieldOfExpertise : new FormControl (null),
    thirdFieldOfExpertise : new FormControl (null),
    yearsOfExperience : new FormControl (null, [Validators.required]),
    howCanYouHelp: new FormControl (null , [ Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(65)]),
  });
  constructor(public _authService: AuthService, public _router: Router) { }


  submitMentorForm(mentorForm: FormGroup) {
    if (mentorForm.valid) {
      this._authService.MsignUp(mentorForm.value).subscribe((response) => {
        if (response.Message = 'Added user') {
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
