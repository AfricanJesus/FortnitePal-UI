import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AppService} from "../app.service";
import {ItemSingleService} from "../shared/services/itemsingle.service";
import RootObject = ItemSingleModule.RootObject;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  item: RootObject;
  url: string = 'http://localhost:8080/api/items/';
  id: number;
  sub: any;

  constructor(private appService: AppService, private route: ActivatedRoute, private itemSingleService: ItemSingleService, private router: Router) {
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
      (data: RootObject) => {
        this.item = data
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
