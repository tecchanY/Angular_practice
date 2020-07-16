import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroinesComponent } from "./heroines/heroines.component";

import { FormsModule } from "@angular/forms";
import { HeroineDetailComponent } from './heroine-detail/heroine-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, HeroinesComponent, HeroineDetailComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
