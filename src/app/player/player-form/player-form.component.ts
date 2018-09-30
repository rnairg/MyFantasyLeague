import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { RestService } from '../../rest.service';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = new Player(0,"","");
  players = Array<Player>();
  constructor(private restService: RestService) {}

  onSubmit(){
    this.players =[this.player];
    this.restService.restCall('http://localhost:8080/players/add','post',JSON.parse('{"players":'+JSON.stringify(this.players)+'}'))
    .subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      });
    console.log(JSON.parse('{"players":'+JSON.stringify(this.players)+'}'));
  }
  ngOnInit() {
  }

}
