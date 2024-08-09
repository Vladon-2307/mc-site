import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  userDate: {id: string, username: string, userLogo: any}

  constructor(private readonly authService: AuthService) {
    this.userDate = this.authService.getUserData()
  }

  logout(){
    this.authService.logout()
  }
}
