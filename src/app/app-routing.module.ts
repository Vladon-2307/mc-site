import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {RulesComponent} from "./pages/rules/rules.component";
import {BanListComponent} from "./pages/ban-list/ban-list.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {publicGuard} from "./guards/public.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [publicGuard]
      },
      {
        path: 'rules',
        component: RulesComponent,
      },
      {
        path: 'ban-list',
        component: BanListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
