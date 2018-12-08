import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;
import ItemsObject = ItemListModule.ItemsObject;
import {environment} from "../../../environments/environment.prod";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // baseUrl: string = '/api/items/';
  baseUrl = environment.baseAPIUrl;

  constructor(private  http: HttpClient) {
  }

  getItem(id: number): Observable<ItemObject> {
    return this.http.get<ItemObject>(this.baseUrl + "/api/items/" + id);
  }

  getItems(url: string): Observable<ItemsObject> {
    return this.http.get<ItemsObject>(this.baseUrl + url);
  }


  createItem(item: ItemObject) {
    let body = JSON.stringify(item, null, 2);
    console.log(body);
    return this.http.post('/api/items', body, httpOptions);
  }

  updateItem(item: ItemObject): Observable<ItemObject> {
    var url: string = this.baseUrl + item.id;
    return this.http.put(url, item, httpOptions)
      .pipe(map(() => item));
  }
}
