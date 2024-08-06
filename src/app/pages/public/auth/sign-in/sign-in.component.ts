import {Component} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    LucideAngularModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  showPassword = true

  signInForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private readonly authService: AuthService) {
  }

  loginError(){
    if(!this.signInForm.controls.login.touched){
      return ''
    }
    if(this.signInForm.controls.login.hasError('required')){
      return '* Логин не может быть пустым.'
    }
    return ''
  }

  passwordError(){
    if(!this.signInForm.controls.password.touched){
      return ''
    }
    if(this.signInForm.controls.password.hasError('required')){
      return '* Пароль не может быть пустым.'
    }
    if(this.signInForm.controls.password.hasError('minlength')){
      return '* Пароль не может быть меньше 8 символов.'
    }
    return ''
  }

  submit(){
    if(!this.signInForm.valid){
      return
    }
    // @ts-ignore
    this.authService.signIn(this.signInForm.value)
  }
}
