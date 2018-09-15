import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

import Item = ItemSingleModule.Item;



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemSingleService {

  constructor(private  http: HttpClient) { }

  getItems(url: string): Observable<Item>{
    return this.http.get<Item>(url);
  }
}
