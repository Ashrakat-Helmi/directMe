import { AuthService } from './../../sharedService/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _AuthService :AuthService) { }
  isLogin:boolean = false;
  ngOnInit(): void {

    this._AuthService.usrData.subscribe(()=>{
      if(this._AuthService.usrData.getValue() != null){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
    
  }

}
