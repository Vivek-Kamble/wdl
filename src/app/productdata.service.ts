import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  url="http://192.168.43.192:8001/api/v1/products";
  constructor(private http:Http) { }

  getAll(){
    return this.http.get(this.url);
  }
  getOne(id){
    return this.http.get(this.url);
  }
  update(id,data)
  {
    return this.http.patch(this.url+"/"+id,data);
  }
  delete(id){
    return this.http.delete(this.url+"/"+id);

  }
  add(data)
  {
    return this.http.post(this.url,data)
  }

}
