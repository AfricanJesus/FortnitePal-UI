import { Component } from '@angular/core';
import { AppService } from '../../app.service';

import { ItemListService} from "../../shared/services/itemlist.service";

import RootObject = ItemListModule.RootObject;
import Item = ItemListModule.Item;



@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html'
})
export class ItemlistComponent {

  url: string = 'http://localhost:8080/api/items?size=5000';

  constructor(private appService: AppService, private itemListService: ItemListService) {
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
  perPage = 20;

  filterVal = '';
  currentPage = 1;
  totalItems = 0;

  itemData: Object[] = [];
  originalItemData: Object[] = [];

  getItems() {
    this.itemListService.getItems(this.url).subscribe(
      (data: RootObject) => {
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
}
