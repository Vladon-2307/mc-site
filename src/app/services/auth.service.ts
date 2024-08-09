import {Injectable} from '@angular/core';
import {ISignIn} from "../core/interfaces/sign-in.interface";
import {ISignUp} from "../core/interfaces/sign-up.interface";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

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
    this.http.post<{ access_token: string }>('/api/auth/token', singInData).subscribe(
      res => {
        localStorage.setItem('access_token', res.access_token)
        console.log(this.jwt.decodeToken())
      },
      err => {
        console.log(err)
      }
    )
  }

  signUp(signUpData: ISignUp) {
    return this.http.post('/api/auth/register', signUpData).subscribe(
      res => {
        this.router.navigateByUrl('/')
      },
      err => {
        console.log(err)
      }
    )
  }

  logout() {
    localStorage.removeItem('access_token')
  }

  isAuth() {
    return !!localStorage.getItem('access_token')
  }
}
