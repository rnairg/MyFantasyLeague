import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  res: any;

  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

   }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.id = id;
    });
    this.http.get('http://localhost:8080/players/player/' + this.id)
    .subscribe((res) => {
      this.res = res;
      console.log(this.res);
    });
  }

}
