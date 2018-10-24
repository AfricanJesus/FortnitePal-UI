import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

import Item = ItemSingleModule.Item;
import "rxjs-compat/add/operator/do";
import RootObject = ItemSingleModule.RootObject;



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemSingleService {

  url: string = 'http://localhost:8080/api/items/';

  constructor(private  http: HttpClient) { }

  getItem(id: number): Observable<RootObject> {
    return this.http.get<RootObject>(this.url + id)
      .do(data => console.log('ITEM: ' + JSON.stringify(data, null, 2)));
  }

  createItem(item: Item) {
    let body = JSON.stringify(item, null, 2);
    console.log(body);
    return this.http.post('http://localhost:8080/api/items', body, httpOptions);
  }
}
