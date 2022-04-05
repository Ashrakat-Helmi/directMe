import { ApiFunctionsService } from './../../sharedService/api-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-mentor',
  templateUrl: './find-mentor.component.html',
  styleUrls: ['./find-mentor.component.css']
})
export class FindMentorComponent implements OnInit {

  mentorData;
  constructor(private serv: ApiFunctionsService) {
    this.serv.getMentors().subscribe((data:any) => {
       console.log(data);
       this.mentorData = data as string[];
    });
  }

  ngOnInit(): void {
  }

}
