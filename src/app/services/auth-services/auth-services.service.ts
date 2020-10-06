import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private userUrl = "http://localhost:5000/";
  constructor(
    private http:HttpClient
  ) { }
  isLoggedIn(){
    return false
  }

  verify_otp(otp){
    return this.http.post(
      this.userUrl.concat('verify-otp'),
      JSON.stringify(otp)
    );
  }


  create_OTP(user_data){
    return this.http.post(
      this.userUrl.concat('generate-otp'),
      JSON.stringify(user_data)
    );
  }

  get currentUser(){
    return {
    _name:'Shivank',
    _isAdmin:true,
    _phone:9667943369,
    _password:'lol',

}
  }
}
