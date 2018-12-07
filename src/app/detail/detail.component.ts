import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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


  constructor(private appService: AppService, private route: ActivatedRoute, private itemSingleService: ItemService) {
  }

  ngOnInit() {
    this.itemSingleService.getItem(this.route.snapshot.params.id).subscribe(
      (data: ItemObject) => {
        this.item = data
      },
      err => console.error(err),
      () => {
        console.log('Data Loaded'), this.appService.pageTitle = this.item.name
      }
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

}
