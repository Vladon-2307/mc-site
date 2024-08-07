import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {SignInComponent} from "../auth/sign-in/sign-in.component";
import {HeaderComponent} from "../components/header/header.component";
import {MonitoringComponent} from "../components/monitoring/monitoring.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    SignInComponent,
    HeaderComponent,
    MonitoringComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  authVisible = false

  constructor(readonly authService: AuthService) {
  }

}
