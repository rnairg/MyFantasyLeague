import { PlayerViewComponent } from './player/player-view/player-view.component';
import { PlayerComponent } from './player/player.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'players', component: PlayerComponent},
  {path: 'players/player/:id', component: PlayerViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
