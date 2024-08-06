import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./pages/public/public-layout/public-layout.component";
import {HomeComponent} from "./pages/public/home/home.component";
import {SignInComponent} from "./pages/public/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/public/auth/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
