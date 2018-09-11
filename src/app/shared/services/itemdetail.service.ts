import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import RootObject = ItemDetailModule.RootObject;
import {Observable} from "rxjs/Rx";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemdetailService {

  constructor(private  http: HttpClient) { }

  getItems(url: string): Observable<RootObject>{
    return this.http.get<RootObject>(url);
  }
}
