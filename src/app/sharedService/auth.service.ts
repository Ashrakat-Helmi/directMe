import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private SignUpUrl = 'https://direct22.herokuapp.com/users/signup';
  private SignInUrl = 'https://direct22.herokuapp.com/users/signIn';
  private MsignUpUrl = 'https://direct22.herokuapp.com/mentors/addMentor';

  usrData= new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

  saveUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.usrData.next(jwtDecode(encodedUserData));
    console.log(this.usrData);

  }

  signUp(formData: object): Observable<any> {
    return this._httpClient.post(this.SignUpUrl, formData);
  }
  login(formData: object): Observable<any> {
    return this._httpClient.post(this.SignInUrl, formData);
  }
  MsignUp(formData: object): Observable<any> {
    return this._httpClient.post(this.MsignUpUrl, formData);
  }
}
