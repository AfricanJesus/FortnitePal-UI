import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../../environments/environment";
import ChallengeSetObject = ChallengeSetModule.ChallengeSetObject;



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ChallengesetService {

  baseAPIUrl = environment.baseAPIUrl;

  constructor(private http: HttpClient) { }

  getChallenges(url: string): Observable<ChallengeSetObject>{
    return this.http.get<ChallengeSetObject>(this.baseAPIUrl + url);
  }
}

