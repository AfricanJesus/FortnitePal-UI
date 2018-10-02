import {Component, Input, OnInit} from '@angular/core';

import Item = ItemSingleModule.Item;

import {ItemSingleService} from "../../services/itemsingle.service";

import {NavigationEnd, Router} from "@angular/router";




@Component({
  selector: 'app-itemsingle',
  templateUrl: './itemsingle.component.html'
})
export class ItemsingleComponent implements OnInit{

  item: Item;
  @Input() url: string;

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
  getBackground(type){
    switch (type){
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
  getRarityColor(type){
    switch (type){
      case 'LEGENDARY':
        return '#FAA763';
      case 'EPIC':
        return '#D65AFA';
      case 'RARE':
        return '#3EBAED';
      case 'COMMON':
        return '#A0A7AD';
      case 'UNCOMMON':
        return '#7BCC41';
    }
  }


}
