import { ApiFunctionsService } from './../sharedService/api-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventData: [];
  constructor(private serv:ApiFunctionsService) {
    this.serv.getMentors().subscribe((data: any) => {
      console.log(data);
      this.eventData = data;
    });
   }

  ngOnInit(): void {
  }

}
