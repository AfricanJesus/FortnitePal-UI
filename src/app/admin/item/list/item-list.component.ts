import { Component } from '@angular/core';
import {AppService} from '../../../app.service';


import ItemsObject = ItemListModule.ItemsObject;
import {ItemService} from "../../../shared/services/item.service";
import {environment} from "../../../../environments/environment.prod";



@Component({
  selector: 'app-admin-itemlist',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  url: string = '/api/items?size=5000';
  baseImageUrl = environment.baseImageUrl;

  constructor(private appService: AppService, private itemService: ItemService) {
    this.appService.pageTitle = 'Items';
    // this.loadData();
    this.getItems();
    this.update();
  }

  // Table

  // Options
  searchKeys = ['id', 'name', 'itemType', 'set'];
  sortBy = 'id';
  sortDesc = false;
  perPage = 50;

  filterVal = '';
  currentPage = 1;
  totalItems = 0;

  itemData: Object[] = [];
  originalItemData: Object[] = [];

  getItems() {
    this.itemService.getItems(this.url).subscribe(
      (data: ItemsObject) => {
        this.originalItemData = data._embedded.items;
        this.update();
      },
      err => console.error(err),
      () => console.log('Items Loaded')
    );
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.perPage);
  }

  update() {
    const data = this.filter(this.originalItemData);

    this.totalItems = data.length;

    this.sort(data);
    this.itemData = this.paginate(data);
  }

  filter(data) {
    const filter = this.filterVal.toLowerCase();
    return !filter ?
      data.slice(0) :
      data.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(filter) !== -1 || !filter;
      });
  }

  sort(data) {
    data.sort((a: any, b: any) => {
      a = typeof(a[this.sortBy]) === 'string' ? a[this.sortBy].toUpperCase() : a[this.sortBy];
      b = typeof(b[this.sortBy]) === 'string' ? b[this.sortBy].toUpperCase() : b[this.sortBy];

      if (a < b) {
        return this.sortDesc ? 1 : -1;
      }
      if (a > b) {
        return this.sortDesc ? -1 : 1;
      }
      return 0;
    });
  }

  paginate(data) {
    const perPage = parseInt(String(this.perPage), 10);
    const offset = (this.currentPage - 1) * perPage;

    return data.slice(offset, offset + perPage);
  }

  setSort(key) {
    if (this.sortBy !== key) {
      this.sortBy = key;
      this.sortDesc = false;
    } else {
      this.sortDesc = !this.sortDesc;
    }
    this.currentPage = 1;
    this.update();
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
