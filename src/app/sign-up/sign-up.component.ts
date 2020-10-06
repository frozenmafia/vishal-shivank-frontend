import { ElementRef, HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_SORT_HEADER_INTL_PROVIDER_FACTORY } from '@angular/material/sort';
import { generate } from 'rxjs';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages, regExps } from '../Error-Validator/custom-validators';
import { AuthServicesService } from '../services/auth-services/auth-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  dialCode: 91;
  hide = true;
  hideC=true;
  userForm:FormGroup;
  isDisabled: boolean;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;
  genders=[
    {value:'male',viewValue:'Male'},
    {value:'female',viewValue:'Female'},
    {value:'others',viewValue:'Others'}
  ]

  constructor(
    private fb:FormBuilder,
    private auth:AuthServicesService
  ) { }
  ngOnInit(): void {

    this.userForm = this.fb.group({
      name:['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      phone:['',[
        Validators.required
      ]],
      country_code:[''],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      college_name:['',[
        Validators.required
      ]],
      gender:['',[
        Validators.required
      ]],
      dob:['',[
        Validators.required
      ]],
      passwordGroup:this.fb.group({
        password:['',[
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(regExps.password)
        ]],
        confirmPassword:['',[
          Validators.required
        ]]
      },{validators:CustomValidators.childrenEqual})
    });
   }
  disableForm(){
    this.userForm.disable();
    this.isDisabled = true;
  }
  enableForm(){
    this.userForm.enable();
    this.isDisabled = false
  }
  login(){
    console.log('lol');
  }
  signUp(){
    console.log('sign up');
    // this.phoneInput = this.userForm.value.phone
    this.userForm.patchValue({
      country_code:Number(this.get_country_code()),
      phone:Number(this.userForm.value.phone)
    })
    // console.log(this.userForm.value.phone)
    console.log(this.userForm.value)
    this.generate_otp(this.userForm.value)



  }
  onCountryChange(obj){
    this.dialCode = obj.dialCode;

  }
  generate_otp(user_data){
    this.auth.create_OTP(user_data).subscribe();
  }

  get_country_code(){

    if(this.dialCode != undefined){
      console.log('code changed')
      return this.dialCode
    }
    else{
      
      console.log('Not changed')
      return 91
    }



}
}
