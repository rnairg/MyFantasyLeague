import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestOptions} from '@angular/http';

let headers= new HttpHeaders({
  'Access-Control-Allow-Headers':'origin',
  'Content-Type':'application/json',
  'Access-Control-Allow-Methods': 'POST,GET,PUT',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Max-Age':'3600',
  'Allow':'POST,PUT,DELETE'
})
const httpOptions ={
  headers: headers
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
      if(action=="put"){
        this.obs=this.http.put(url,JSON.stringify(body),httpOptions);
        return this.obs;
      }
      if(action=="delete"){
        this.obs=this.http.request('DELETE',url,{body:JSON.stringify(body),headers:headers})
        return this.obs;
      }

      
  }
 /* prinToConsole(arg) {
    console.log(arg);
  }*/
}
