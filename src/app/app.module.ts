import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerViewComponent } from './player/player-view/player-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
