import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { RestService } from '../../rest.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = new Player(0,'','');
  players = new Array<Player>();
  id: any;
  res: any;
  constructor(private route: ActivatedRoute, private router: Router,private restService: RestService) {}

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
    console.log(this.player.name);
    this.players =[this.player];
    this.restService.restCall('http://localhost:8080/players/add','post',JSON.parse('{"players":'+JSON.stringify(this.players)+'}'))
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      });
    console.log(JSON.parse('{"players":'+JSON.stringify(this.players)+'}'));
  }
  onSave(){
    this.players =[this.player];
    console.log("name = "+this.player.name);
    this.restService.restCall('http://localhost:8080/players/update','put',JSON.parse('{"players":'+JSON.stringify(this.players)+'}'))
    .subscribe(
      data => {
          console.log("PUT Request is successful ", data);
          this.editMode=false;
          this.viewMode=true;
      });
    console.log(JSON.parse('{"players":'+JSON.stringify(this.players)+'}'));
  }
  onDelete(){
    this.players =[this.player];
    console.log("name = "+this.player.name);
    this.restService.restCall('http://localhost:8080/players/delete','delete',JSON.parse('{"players":'+JSON.stringify(this.players)+'}'))
    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
          this.router.navigate(['/players']);
      });
    
  }
  onEdit(){
    this.editMode=true;
    this.viewMode=false;
    console.log([this.player]);
  }
  onCancelEdit(){
    this.editMode=false;
    this.viewMode=true;
  }
  setPlayerData(id:number,name:string,category:string){
    this.player.id=id;
    this.player.name=name;
    this.player.category=category;
  }

  ngOnInit() {
    this.setState();
    if(this.viewMode){
      this.id = this.route.snapshot.paramMap.get('id');
      this.restService.restCall('http://localhost:8080/players/player/' + this.id,"get",null)
    .subscribe((res) => {
      this.res = res;
      this.setPlayerData(this.res.players[0].id,this.res.players[0].name,this.res.players[0].category);
      console.log(this.player);
    });
    }
  }

}
