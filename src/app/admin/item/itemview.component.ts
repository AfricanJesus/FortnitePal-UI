import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ItemSingleService} from "../../shared/services/itemsingle.service";
import {ActivatedRoute} from "@angular/router";
import RootObject = ItemSingleModule.RootObject;


@Component({
  selector: 'app-admin-itemview',
  templateUrl: './itemview.component.html'
})
export class ItemviewComponent implements OnInit {

  item: RootObject;

  constructor(private appService: AppService, private itemSingleService: ItemSingleService, private route: ActivatedRoute) {
    this.appService.pageTitle = 'View';
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

}
