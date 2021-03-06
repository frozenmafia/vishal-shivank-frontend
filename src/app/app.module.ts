import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    HomeComponent,
    OtpVerificationComponent,
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatAutocompleteModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    AdminModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
