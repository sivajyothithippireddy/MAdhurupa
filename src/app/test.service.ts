import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private ht:HttpClient) { }
  
  get(){
    return this.ht.get("http://localhost:3000/remo")
  }
  post(d){
    return this.ht.post("http://localhost:3000/remo",d)
  }

  chan(a){
    console.log("8651321a65497yt8g4kiyuj",a)
       return this.ht.patch("http://localhost:3000/remo/"+a.id,a);
  }
  dele(a){

    return this.ht.delete("http://localhost:3000/remo",a);
  }
}
