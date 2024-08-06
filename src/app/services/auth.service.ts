import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(singInData: {login: string, password: string}){

  }

  signUp(signUpData: {login: string, password: string}){

  }

  logout(){

  }

  isAuth(){

  }
}
