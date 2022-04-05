import { MProfileComponent } from './mentors/m-profile/m-profile.component';
import { MentorSignUpComponent } from './mentors/mentor-sign-up/mentor-sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisteComponent } from './auth/registe/registe.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindMentorComponent } from './mentors/find-mentor/find-mentor.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'findMentor',component:FindMentorComponent},
  {path:'signUp', component:RegisteComponent},
  {path:'login', component:LoginComponent},
  {path:'MsignUp', component:MentorSignUpComponent},
  {path:'mProfile', component:MProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
