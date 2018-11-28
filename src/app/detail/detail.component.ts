import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AppService} from "../app.service";
import {ItemService} from "../shared/services/item.service";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  item: ItemObject;
  url: string = '/api/items/';
  id: number;

  constructor(private appService: AppService, private route: ActivatedRoute, private itemSingleService: ItemService, private router: Router) {
    this.appService.pageTitle = 'Detail';

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
    this.itemSingleService.getItem(this.route.snapshot.params.id).subscribe(
      (data: ItemObject) => {
        this.item = data
      },
      err => console.error(err),
      () => console.log('Data Loaded')
    );
  }

  getBackground(type) {
    switch (type) {
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

  getRarityColor(type) {
    switch (type) {
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
