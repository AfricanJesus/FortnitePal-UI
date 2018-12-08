import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {ItemService} from "../shared/services/item.service";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;
import {environment} from "../../environments/environment.prod";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  item: ItemObject;
  // url: string = '/api/items/';
  id: number;
  baseImageUrl = environment.baseImageUrl;


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
