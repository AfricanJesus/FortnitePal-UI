import {Component, Input, OnInit} from '@angular/core';

import {ItemService} from "../../services/item.service";
import ItemsObject = ItemListModule.ItemsObject;
import Item = ItemListModule.Item;
import {ItemsComponent} from "../../../items/items.component";
import {environment} from "../../../../environments/environment";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-itemsimple',
  templateUrl: './itemsimple.component.html',
})
export class ItemsimpleComponent implements OnInit {

  items: Item[];
  @Input() url: string;
  @Input() parent?: ItemsComponent;
  baseImageUrl = environment.baseImageUrl;

  constructor(private itemService: ItemService, private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
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
        console.log('Data Loaded')
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
        return environment.legendaryBackground;
      case 'EPIC':
        return environment.epicBackground;
      case 'RARE':
        return environment.rareBackground;
      case 'COMMON':
        return environment.commonBackground;
      case 'UNCOMMON':
        return environment.uncommonBackground;
    }
  }
}
