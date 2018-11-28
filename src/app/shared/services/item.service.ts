import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;
import ItemsObject = ItemListModule.ItemsObject;


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = '/api/items/';

  constructor(private  http: HttpClient) {
  }

  getItem(id: number): Observable<ItemObject> {
    let token = localStorage.getItem('access_token');
    return this.http.get<ItemObject>(this.baseUrl + id);
    // return this.http.get<RootObject>(this.baseUrl + id,
    //   {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)}
    //   )
    //   .do(data => console.log('ITEM: ' + JSON.stringify(data, null, 2)));
  }

  getItems(url: string): Observable<ItemsObject> {
    return this.http.get<ItemsObject>(url);
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
