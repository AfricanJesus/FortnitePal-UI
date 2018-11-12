import {Component, Input, OnInit} from '@angular/core';


import {ItemService} from "../../services/item.service";
import ItemsObject = ItemListModule.ItemsObject;
import Item = ItemListModule.Item;

@Component({
  selector: 'app-itemsimple',
  templateUrl: './itemsimple.component.html',
})
export class ItemsimpleComponent implements OnInit {

  items: Item[];
  @Input() url: string;

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
      () => console.log('Data Loaded')
    );
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
