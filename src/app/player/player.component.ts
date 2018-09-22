import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  res: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:8080/players')
    .subscribe((res) => {
      this.res = res;
      console.log(this.res);
    });
  }

}
