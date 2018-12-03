import {Component, OnInit} from '@angular/core';
import {ItemService} from "../shared/services/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-simple-list',
  templateUrl: './items.html'
})
export class ItemsComponent implements OnInit {

  url: string;
  flag: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.flag = this.route.snapshot.params.itemType;
    console.log(this.flag);
    this.setURL(this.flag);
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
