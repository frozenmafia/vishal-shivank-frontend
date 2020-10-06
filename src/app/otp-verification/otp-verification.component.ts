import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../Error-Validator/custom-validators';
import { AuthServicesService } from '../services/auth-services/auth-services.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  verifyForm:FormGroup;
  errors = errorMessages;
  private ngUnsubscribe = new Subject();

  

  constructor(
    private fb:FormBuilder,
    private auth:AuthServicesService
  ) { }

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      otp:['',[
        Validators.required
      ]]
    })
  }

  verify_otp(){
    this.auth.verify_otp(this.verifyForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
