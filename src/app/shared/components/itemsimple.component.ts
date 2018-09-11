import {Component, Input, OnInit} from '@angular/core';
import RootObject = ItemSimpleModule.RootObject;

import Item = ItemSimpleModule.Item;
import {ItemSimpleService} from "../services/itemsimple.service";

@Component({
  selector: 'app-itemsimple',
  templateUrl: './itemsimple.component.html',
})
export class ItemsimpleComponent implements OnInit {

  public items: Item[];
  @Input() url: string;

  constructor(private itemSimpleService: ItemSimpleService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemSimpleService.getItems(this.url).subscribe(
      (data: RootObject) => { this.items = data._embedded.items},
      err => console.error(err),
      () => console.log('outfits loaded')
    );
  }
}
