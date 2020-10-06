import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidParentMatcher, errorMessages, regExps } from '../Error-Validator/custom-validators';
import { AuthServicesService } from '../services/auth-services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myVar;
  dialCode = 91;
  hide=true;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors=errorMessages;
  userForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      'phone':['',[
        Validators.required
      ]],
      'password':['',[
        Validators.required,
        Validators.pattern(regExps.password)
      ]]
    })
   }


  login(){
    this.userForm.value.phone = this.get_phone_number()
    console.log(this.userForm.value);
  }

  onCountryChange(obj){
    this.dialCode = obj.dialCode

  }
  get_phone_number(){
    if(this.dialCode){
      return {
        countryCode:this.dialCode,
        phone:this.userForm.value.phone
      }

    }
    else{
      this.dialCode = 91;
      console.log(this.dialCode);
      return {
        countryCode:this.dialCode,
        phone:this.userForm.value.phone
      }
    }

}
}
