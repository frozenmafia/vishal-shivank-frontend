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
  
  is_otp_being_verified = false;
  isOtpbeingVerified(){
    return this.is_otp_being_verified
  }
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
    this.is_otp_being_verified = true
    return this.http.post(
      this.userUrl.concat('generate-otp'),
      JSON.stringify(user_data)
    );
  }
  load_home_page(){
    return this.http.get(this.userUrl.concat('home'))
  }
}
