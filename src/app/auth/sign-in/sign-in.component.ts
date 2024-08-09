import {Component, OnDestroy} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent{

  signInForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private readonly authService: AuthService) {
  }

  loginError(): string {
    if(!this.signInForm.controls.login.touched)
      return ''
    if(this.signInForm.controls.login.hasError('required'))
      return '* Логин не может быть пустым.'
    return ''
  }

  passwordError(): string {
    if(!this.signInForm.controls.pass.touched)
      return ''
    if(this.signInForm.controls.pass.hasError('required'))
      return '* Пароль не может быть пустым.'
    if(this.signInForm.controls.pass.hasError('minlength'))
      return '* Пароль не может быть меньше 8 символов.'
    return ''
  }

  submit(){
    if(this.signInForm.valid){
      // @ts-ignore
      this.authService.signIn(this.signInForm.value)
    }
  }
}
