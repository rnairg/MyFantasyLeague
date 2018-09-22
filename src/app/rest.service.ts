import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  prinToConsole(arg) {
    console.log(arg);
  }
}
