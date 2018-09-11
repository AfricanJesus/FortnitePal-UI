import {Component, Input, OnInit} from '@angular/core';
import RootObject = ItemSimpleModule.RootObject;

import Item = ItemSimpleModule.Item;
import {ItemdetailService} from "../services/itemdetail.service";


@Component({
  selector: 'app-itemseason',
  templateUrl: './itemseason.component.html',
})
export class ItemseasonComponent implements OnInit {

  public items: Item[];
  @Input() url: string;

  constructor(private itemDetailService: ItemdetailService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemDetailService.getItems(this.url).subscribe(
      (data: RootObject) => { this.items = data._embedded.items},
      err => console.error(err),
      () => console.log('outfits loaded')
    );
  }
}
