import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

import StyleSetObject = StyleSetModule.StyleSetObject;
import StyleSetsObject = StyleSetsModule.StyleSetsObject;
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StylesetService {

  baseUrl = environment.baseAPIUrl;

  constructor(private http: HttpClient) { }

  getStyle(url: string): Observable<StyleSetObject>{
    return this.http.get<StyleSetObject>(url);
  }

  getStyles(url: string): Observable<StyleSetsObject> {
    return this.http.get<StyleSetsObject>(this.baseUrl + url);
  }
}
