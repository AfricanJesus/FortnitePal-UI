import {Component, Input, OnInit} from '@angular/core';


import RootObject = ItemSimpleListModule.RootObject;
import Item = ItemSimpleListModule.Item;
import {ItemListService} from "../services/itemlist.service";


@Component({
  selector: 'app-itemseason',
  templateUrl: './itemseason.component.html',
})
export class ItemseasonComponent implements OnInit {

  public items: Item[];
  @Input() url: string;

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemListService.getItems(this.url).subscribe(
      (data: RootObject) => { this.items = data._embedded.items},
      err => console.error(err),
      () => console.log('Data Loaded')
    );
  }
  getItemID(item: Item): number{
    var split = item._links.self.href.split("/", 6);
    return Number(split[split.length - 1]);
  }
}
