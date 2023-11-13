import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getservice()
  {
      return [ {name:"iheb", age:23}];
    

  }
}
