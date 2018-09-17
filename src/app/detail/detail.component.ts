import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import Item = ItemSingleModule.Item;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  items: Item[];
  url: string = 'http://localhost:8080/api/items/';
  id: number;
  sub: any;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.appService.pageTitle = 'Detail';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      });
    this.url += this.id;
  }

}
