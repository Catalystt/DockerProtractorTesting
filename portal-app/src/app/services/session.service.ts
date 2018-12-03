import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session = null; 

  data: {[k: string]: any} = {};  //defines an object that takes a string as key and any object as value.

  update(object_name, object_data){

    if(this.data[object_name]){
      this.data.stores_list = object_data;
    }
    else{
      this.data.stores_list = object_data;
    }
  };
  
  get(object_name){
      console.log(object_name);
      console.log(this.data.stores_list);
      return this.data.stores_list;
    
    
  }



  constructor() { }
}
