import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ItemService} from "../../shared/services/item.service";
import {ActivatedRoute} from "@angular/router";
import ItemObject = ItemSingleModule.ItemObject;


@Component({
  selector: 'app-admin-itemview',
  templateUrl: './item-view.component.html'
})
export class ItemViewComponent implements OnInit {

  item: ItemObject;

  constructor(private appService: AppService, private itemSingleService: ItemService, private route: ActivatedRoute) {
    this.appService.pageTitle = 'View';
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

}
