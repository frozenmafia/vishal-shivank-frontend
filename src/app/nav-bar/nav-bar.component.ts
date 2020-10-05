import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services/auth-services.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public auth:AuthServicesService,
  ) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    return false
  }
  getCurrentUserName(){
    if(this.isLoggedIn()){
      return "Shivank"
    }
    else{
      return "Account"
    }
  }
}
