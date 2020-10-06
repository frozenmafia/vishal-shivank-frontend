import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'otp-verification',component:OtpVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
