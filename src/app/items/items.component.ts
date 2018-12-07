import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-item-simple-list',
  templateUrl: './items.html'
})
export class ItemsComponent implements OnInit {

  url: string;
  flag: string;
  numOfItems: number;

  constructor(private route: ActivatedRoute, private router: Router) {
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
    this.flag = this.route.snapshot.params.itemType;
    this.setURL(this.flag);
  }

  get self(): ItemsComponent {
    return this;
  }

  setURL(itemType: string): void {
    if (itemType.includes('season')) {
      this.url = '/api/items/search/findByObtained_Season?season=' + itemType.charAt(itemType.length - 1) + '&sort=obtained_tier&size=500';
    } else if (itemType == 'unreleased') {
      this.url = '/api/items/search/findByStatus?status=' + itemType.toUpperCase() + '&sort=rarityType&projection=itemModelSimple&sort=name&size=500';
    } else {
      this.url = '/api/items/search/findByItemType?item=' + itemType.toUpperCase() + '&sort=rarityType&projection=itemModelSimple&size=500&sort=name';
    }
  }

}
