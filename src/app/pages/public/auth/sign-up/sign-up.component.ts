import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [
        LucideAngularModule,
        ReactiveFormsModule
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  showPassword = true
  showPasswordReplay = true

  signUpForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordReplay: new FormControl('', ),
  });

  constructor(private readonly authService: AuthService) {
  }

  loginError(){
    if(!this.signUpForm.controls.login.touched){
      return ''
    }
    if(this.signUpForm.controls.login.hasError('required')){
      return '* Логин не может быть пустым.'
    }
    return ''
  }

  passwordError(){
    if(!this.signUpForm.controls.password.touched){
      return ''
    }
    if(this.signUpForm.controls.password.hasError('required')){
      return '* Пароль не может быть пустым.'
    }
    if(this.signUpForm.controls.password.hasError('minlength')){
      return '* Пароль не может быть меньше 8 символов.'
    }
    return ''
  }

  passwordReplayError(){
    if(!this.signUpForm.controls.passwordReplay.touched){
      return ''
    }
    if(this.signUpForm.controls.password.value != this.signUpForm.controls.passwordReplay.value){
      return '* Пароли не совподают.'
    }
    return ''
  }

  submit(){
    if(!this.signUpForm.valid){
      return
    }
    const signUpData = {
      login: this.signUpForm.controls.login.value,
      password: this.signUpForm.controls.password.value
    }
    // @ts-ignore
    this.authService.signUp(signUpData)
  }
}
