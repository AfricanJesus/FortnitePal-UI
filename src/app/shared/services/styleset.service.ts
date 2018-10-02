import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

import StyleSetObject = StyleSetModule.StyleSetObject;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StylesetService {

  constructor(private http: HttpClient) { }

  getStyle(url: string): Observable<StyleSetObject>{
    return this.http.get<StyleSetObject>(url);
  }
}
