import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerFormComponent } from './player/player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
