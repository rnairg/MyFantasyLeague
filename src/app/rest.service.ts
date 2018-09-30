import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers':'origin',
    'Content-Type':'application/json',
    'Access-Control-Allow-Methods': 'POST,GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age':'3600',
    'Allow':'POST'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private obs = new Observable<any>();
  
  constructor(private http: HttpClient){}

  restCall(url:string,action:string,body:any):Observable<any>{
      console.log("Service Called with URL:"+url);
      if(action=="get"){
        this.obs = this.http.get(url);
        return this.obs;
      }
      if(action=="post"){
        this.obs=this.http.post(url,JSON.stringify(body),httpOptions);
        return this.obs;
      }

      
  }
 /* prinToConsole(arg) {
    console.log(arg);
  }*/
}
