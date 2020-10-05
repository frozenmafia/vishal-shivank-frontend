import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myVar;
  userForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      '_name':[''],
      '_phone':[''],
      '_password':['']
    })
   }


  login(){
    console.log('lol');
  }

}
