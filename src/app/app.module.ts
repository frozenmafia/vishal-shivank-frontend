import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input/lib/ngx-mat-intl-tel-input.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    HomeComponent,
    OtpVerificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    MatPasswordStrengthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
