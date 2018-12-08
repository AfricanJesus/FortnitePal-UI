import {Component, Input, OnInit} from '@angular/core';

import {ItemService} from "../../services/item.service";
import ItemsObject = ItemListModule.ItemsObject;
import Item = ItemListModule.Item;
import {ItemsComponent} from "../../../items/items.component";
import {environment} from "../../../../environments/environment.prod";


@Component({
  selector: 'app-itemsimple',
  templateUrl: './itemsimple.component.html',
})
export class ItemsimpleComponent implements OnInit {

  items: Item[];
  @Input() url: string;
  @Input() parent?: ItemsComponent;
  baseImageUrl = environment.baseImageUrl;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemService.getItems(this.url).subscribe(
      (data: ItemsObject) => {
        this.items = data._embedded.items
      },
      err => console.error(err),
      () => {
        console.log('Data Loaded'), this.setSize();
      }
    );
  }

  setSize(): void {
    if (this.parent) {
      this.parent.numOfItems = this.items.length;
    }
  }

  getBackground(type) {
    switch (type) {
      case 'LEGENDARY':
        return this.baseImageUrl + '/images/background/legendary.png';
      case 'EPIC':
        return this.baseImageUrl + '/images/background/epic.png';
      case 'RARE':
        return this.baseImageUrl + '/images/background/rare.png';
      case 'COMMON':
        return this.baseImageUrl + '/images/background/common.png';
      case 'UNCOMMON':
        return this.baseImageUrl + '/images/background/uncommon.png';
    }
  }
}
