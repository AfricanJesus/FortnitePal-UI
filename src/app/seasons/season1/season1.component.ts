import { Component } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-seasons-season1',
  templateUrl: './season1.component.html'
})
export class Season1Component {

  url: string = '/api/items/search/findByObtained_Season?season=1&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 1';
  }

}
