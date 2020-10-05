import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }
  isLoggedIn(){
    return false
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
