import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Download, Eye, EyeOff, LucideAngularModule} from "lucide-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Download, Eye, EyeOff }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
