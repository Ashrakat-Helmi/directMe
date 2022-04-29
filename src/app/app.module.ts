import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisteComponent } from './auth/registe/registe.component';
import { FindMentorComponent } from './mentors/find-mentor/find-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MentorSignUpComponent } from './mentors/mentor-sign-up/mentor-sign-up.component';
import { MProfileComponent } from './mentors/m-profile/m-profile.component';
import { AngularFittextModule } from "angular-fittext";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisteComponent,
    FindMentorComponent,
    MentorSignUpComponent,
    MProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
