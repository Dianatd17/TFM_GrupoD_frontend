import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  log: boolean = false

  constructor() { }

  getLog(){
    return this.log
  }

  loginLogOut(){
    this.log = !this.log
  }
}
