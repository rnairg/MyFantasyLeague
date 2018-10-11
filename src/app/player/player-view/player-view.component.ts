import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import {Player} from '../player'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  res: any;
  addMode:boolean = false;
  viewMode:boolean = true;
  //editMode:boolean = false;
  //player = new Player(0,"","");
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

   }
   onEdit(){
    this.viewMode=false;
  }
  onCancelEdit(){
    this.viewMode=true;
  }

  

  ngOnInit() {
    /*this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.id = id;
    });*/
    
    this.id = this.route.snapshot.paramMap.get('id');
    

    console.log('The Action is: '+this.addMode);

    this.http.get('http://localhost:8080/players/player/' + this.id)
    .subscribe((res) => {
      this.res = res;
      console.log(this.res);
    });
    //this.player.id=this.res.player.id;
    //this.player.name=this.res.player.name;
    //this.player.category=this.res.player.category;

  }

}
