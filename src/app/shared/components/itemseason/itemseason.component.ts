import {Component, Input, OnInit} from '@angular/core';


import {ItemService} from "../../services/item.service";
import ItemsObject = ItemListModule.ItemsObject;
import Item = ItemListModule.Item;
import {environment} from "../../../../environments/environment.prod";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AppService} from "../../../app.service";


@Component({
  selector: 'app-itemseason',
  templateUrl: './itemseason.component.html',
})
export class ItemseasonComponent implements OnInit {

  public items: Item[];
  @Input() url: string;
  baseImageUrl = environment.baseImageUrl;

  constructor(private appService: AppService, private itemService: ItemService, private route: ActivatedRoute, private router: Router) {
    this.appService.pageTitle = 'Season ' + this.route.snapshot.params.seasonNumber + ' Items';
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
    this.getSeasonItems(this.route.snapshot.params.seasonNumber);
  }

  getSeasonItems(seasonNumber: number) {
    this.itemService.getItems('/api/items/search/findByObtained_Season?season=' + seasonNumber + '&sort=obtained_tier&size=500').subscribe(
      (data: ItemsObject) => {
        this.items = data._embedded.items
      },
      err => console.error(err),
      () => console.log('Season Loaded')
    );
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
