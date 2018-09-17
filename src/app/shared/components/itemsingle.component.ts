import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import Item = ItemSingleModule.Item;
import {ItemSingleService} from "../services/itemsingle.service";

import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-itemsingle',
  templateUrl: './itemsingle.component.html'
})
export class ItemsingleComponent implements OnInit{

  item: Item;
  @Input() url: string;
  // itemSetUrl: string = 'http://localhost:8080/api/items/search/findBySet?sort=desc&sort=rarityType&projection=itemModelSimple&set=';

  constructor(private itemSingleService: ItemSingleService, private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
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
    this.itemSingleService.getItems(this.url).subscribe(
      (data: Item) => { this.item = data},
      err => console.error(err),
      () => console.log('Data Loaded')
    );
  }


}
