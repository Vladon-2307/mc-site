import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Download, Eye, EyeOff, LucideAngularModule} from "lucide-angular";
import {BackgroundComponent} from "./components/background/background.component";
import {NgOptimizedImage} from "@angular/common";
import {JwtModule} from "@auth0/angular-jwt";
import {HttpClientModule} from "@angular/common/http";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({Download, Eye, EyeOff}),
    NgOptimizedImage,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent, BackgroundComponent]
})
export class AppModule {
}
