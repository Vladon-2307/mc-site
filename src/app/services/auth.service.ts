import { Injectable } from '@angular/core';
import {ISignIn} from "../core/interfaces/sign-in.interface";
import {ISignUp} from "../core/interfaces/sign-up.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(singInData: ISignIn){
    console.log(singInData)
  }

  signUp(signUpData: ISignUp){
    console.log(signUpData)
  }

  logout(){

  }

  isAuth(){
    return false
  }
}
