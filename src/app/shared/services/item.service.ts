import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;
import ItemsObject = ItemListModule.ItemsObject;
import {environment} from "../../../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.baseAPIUrl + '/api/items/';

  constructor(private  http: HttpClient) {
  }

  getItem(id: number): Observable<ItemObject> {
    return this.http.get<ItemObject>(this.baseUrl + id);
  }

  getItems(url: string): Observable<ItemsObject> {
    return this.http.get<ItemsObject>(this.baseUrl + url);
  }


  createItem(item: ItemObject) {
    let body = JSON.stringify(item, null, 2);
    console.log(body);
    return this.http.post(this.baseUrl, body, httpOptions);
  }

  updateItem(item: ItemObject): Observable<ItemObject> {
    console.log(httpOptions);
    var url: string = this.baseUrl + item.id;
    console.log(url);
    return this.http.put(url, item, httpOptions)
      .pipe(map(() => item));
  }
}
