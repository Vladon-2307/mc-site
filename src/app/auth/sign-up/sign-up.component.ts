import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_pass: new FormControl('', [])
  })

  constructor(private readonly authService: AuthService) {
  }

  loginError(): string {
    if(!this.signUpForm.controls.login.touched)
      return ''
    if(this.signUpForm.controls.login.hasError('required'))
      return '* Логин не может быть пустым.'
    return ''
  }

  emailError(): string {
    if(!this.signUpForm.controls.email.touched)
      return ''
    if(this.signUpForm.controls.email.hasError('required'))
      return '* Почта не может быть пустой.'
    if(this.signUpForm.controls.email.hasError('email'))
      return '* Недопустимый адрес почты.'
    return ''
  }

  passwordError(): string {
    if(!this.signUpForm.controls.pass.touched)
      return ''
    if(this.signUpForm.controls.pass.hasError('required'))
      return '* Пароль не может быть пустым.'
    if(this.signUpForm.controls.pass.hasError('minlength'))
      return '* Пароль не может быть меньше 8 символов.'
    return ''
  }

  confirmPasswordError(): string {
    if(!this.signUpForm.controls.confirm_pass.touched)
      return ''
    if(this.signUpForm.controls.confirm_pass.value != this.signUpForm.controls.pass.value)
      return '* Пароли не совподают.'
    return ''
  }

  submit(){
    if(this.signUpForm.valid){
      // @ts-ignore
      this.authService.signUp(this.signUpForm.value)
    }
  }
}
