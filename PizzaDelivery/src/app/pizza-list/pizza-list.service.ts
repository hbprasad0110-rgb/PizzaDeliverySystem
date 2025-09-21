import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaListService {
  configUrl = 'http://172.16.11.25:3001/';

  constructor(private http: HttpClient) { }

  getpizzas() {
    return this.http.get(this.configUrl + "pizza");
  }

  postdata(data) {
    return this.http.post(this.configUrl + "order", data)
  }

}
