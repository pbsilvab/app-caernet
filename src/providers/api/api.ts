import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
	url : String = "";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
 /*get(){
  	this.http.get(this.url).suscribe((resp:JSON)=>{
  		return resp;
  	})
  }
  post($data){
  	this.http.post(this.url, {}, {data: $data}).suscribe((resp:JSON)=>{
  		return resp;
  })*/

}
