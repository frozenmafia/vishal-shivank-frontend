import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { VerifyAuthGuardService } from './services/verify-auth-guard/verify-auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'otp-verification',component:OtpVerificationComponent,canActivate:[VerifyAuthGuardService]},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuardService]},
  {path:'ask-question',component:AskQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
