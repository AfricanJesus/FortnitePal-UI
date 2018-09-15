import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

import RootObject = ItemSimpleListModule.RootObject;

const httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class ItemSimpleListService {

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<RootObject>{
    return this.http.get<RootObject>(url);
  }
}

