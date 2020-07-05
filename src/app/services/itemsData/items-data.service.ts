import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {
  baseURL = 'https://5ca8624dc91d3d0014d7cd7d.mockapi.io/portal/course'
  constructor(private http:HttpClient) { }
     getItems(){
      return this.http.get(this.baseURL);
     }
}
