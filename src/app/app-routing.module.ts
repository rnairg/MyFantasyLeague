import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player/player-form/player-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'players', component: PlayerComponent},
  {path: 'players/player/:id', component: PlayerFormComponent,
  data:[{addMode:false},{viewMode:true}]},
  {path: 'players/add', component: PlayerFormComponent,
    data:[{addMode:true},{viewMode:false}]},
    { path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
