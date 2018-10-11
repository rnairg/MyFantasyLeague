import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { RestService } from '../../rest.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = new Player(0,'','');
  players = Array<Player>();
  id: any;
  res: any;
  constructor(private route: ActivatedRoute, private router: Router,private restService: RestService, private http: HttpClient) {}

  addMode:boolean=false;
  viewMode:boolean=true;
  editMode:boolean=false;
  
  setState(){
    this.addMode=this.route.snapshot.data[0]['addMode'];
    this.viewMode=this.route.snapshot.data[1]['viewMode'];
    console.log("Add Mode is "+this.addMode);
    console.log("View Mode is "+this.viewMode);
  }

  onAdd(){
    this.players =[this.player];
    this.restService.restCall('http://localhost:8080/players/add','post',JSON.parse('{"players":'+JSON.stringify(this.players)+'}'))
    .subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      });
    console.log(JSON.parse('{"players":'+JSON.stringify(this.players)+'}'));
  }
  onEdit(){
    this.editMode=true;
    this.viewMode=false;
  }
  onCancelEdit(){
    this.editMode=false;
    this.viewMode=true;
  }

  ngOnInit() {
    this.setState();
    if(this.viewMode){
      this.id = this.route.snapshot.paramMap.get('id');
      this.http.get('http://localhost:8080/players/player/' + this.id)
    .subscribe((res) => {
      this.res = res;
      console.log(this.res);
    });
    }
  }

}
