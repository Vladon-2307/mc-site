import {Injectable} from '@angular/core';
import {ISignIn} from "../core/interfaces/sign-in.interface";
import {ISignUp} from "../core/interfaces/sign-up.interface";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly jwt: JwtHelperService,
    private readonly router: Router
  ) {
  }

  signIn(singInData: ISignIn) {
    this.http.post<{ access_token: string }>(`${environment.API_BACKEND}/auth/token`, singInData).subscribe(
      res => {
        localStorage.setItem('access_token', res.access_token)
        console.log(this.jwt.decodeToken())
        // this.getUserData()
      },
      err => {
        console.log(err)
      }
    )
  }

  signUp(signUpData: ISignUp) {
    return this.http.post(`${environment.API_BACKEND}/auth/register`, signUpData).subscribe(
      res => {
        this.router.navigateByUrl('/')
      },
      err => {
        console.log(err)
      }
    )
  }

  getUserData(){
    const tokenData = this.jwt.decodeToken()
    const resp: {id: string, username: string, userLogo: any} = {
      id: tokenData.sub,
      username: tokenData.username,
      userLogo: null
    }
    this.http.get(`${environment.API_BACKEND}/${tokenData.sub}/icon.png`).subscribe(
      res=>{
        resp.userLogo = res

      },
      err => {
        console.log(err)
        resp.userLogo = 'icon.png'
      }
  )
    return resp
  }

  logout() {
    localStorage.removeItem('access_token')
  }

  isAuth() {
    return !!localStorage.getItem('access_token')
  }
}
