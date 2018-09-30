import { RestService } from '../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  res: any;

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.restCall('http://localhost:8080/players','get','')
    .subscribe((res)=>{
      this.res = res;
      console.log("Test2:"+res);
    });
  }

}
