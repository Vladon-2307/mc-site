import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
