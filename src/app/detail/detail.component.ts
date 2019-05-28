import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {ItemService} from "../shared/services/item.service";

// *******************************************************************************//
import ItemObject = ItemSingleModule.ItemObject;
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  item: ItemObject;
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
