import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService {

   mentorUrl = 'https://direct22.herokuapp.com/mentors/getAllMentors';
   eventUrl = 'https://direct22.herokuapp.com/session/getALLEvents';
  constructor(private _http: HttpClient ) { }
  getMentors (){
    return this._http.get(this.mentorUrl);
  }


  getEvents(){
    return this._http.get(this.eventUrl);
  }
}
