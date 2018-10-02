import {Component, Input, OnInit} from '@angular/core';

import RootObject = ItemSimpleListModule.RootObject;
import Item = ItemSimpleListModule.Item;

import {ItemSimpleListService} from "../../services/itemsimplelist.service";

@Component({
  selector: 'app-itemsimple',
  templateUrl: './itemsimple.component.html',
})
export class ItemsimpleComponent implements OnInit {

  items: Item[];
  @Input() url: string;

  constructor(private itemSimpleService: ItemSimpleListService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemSimpleService.getItems(this.url).subscribe(
      (data: RootObject) => { this.items = data._embedded.items},
      err => console.error(err),
      () => console.log('Data Loaded')
    );
  }

  getItemID(item: Item): number{
    var split = item._links.self.href.split("/", 6);
    return Number(split[split.length - 1]);
  }
  getBackground(type) {
    switch (type) {
      case 'LEGENDARY':
        return 'http://localhost:8080/images/background/legendary.png';
      case 'EPIC':
        return 'http://localhost:8080/images/background/epic.png';
      case 'RARE':
        return 'http://localhost:8080/images/background/rare.png';
      case 'COMMON':
        return 'http://localhost:8080/images/background/common.png';
      case 'UNCOMMON':
        return 'http://localhost:8080/images/background/uncommon.png';

    }
  }
}
