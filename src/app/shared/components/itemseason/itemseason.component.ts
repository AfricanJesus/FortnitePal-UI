import {Component, Input, OnInit} from '@angular/core';


import {ItemService} from "../../services/item.service";
import ItemsObject = ItemListModule.ItemsObject;
import Item = ItemListModule.Item;


@Component({
  selector: 'app-itemseason',
  templateUrl: './itemseason.component.html',
})
export class ItemseasonComponent implements OnInit {

  public items: Item[];
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
      () => console.log('Season Loaded')
    );
  }

  getBackground(type){
    switch (type){
      case 'LEGENDARY':
        return '/images/background/legendary.png';
      case 'EPIC':
        return '/images/background/epic.png';
      case 'RARE':
        return '/images/background/rare.png';
      case 'COMMON':
        return '/images/background/common.png';
      case 'UNCOMMON':
        return '/images/background/uncommon.png';
    }
  }
}
