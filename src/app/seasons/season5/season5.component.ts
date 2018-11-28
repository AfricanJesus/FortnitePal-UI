import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season5',
  templateUrl: './season5.component.html'
})
export class Season5Component {

  url: string = '/api/items/search/findByObtained_Season?season=5&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 5';
  }

}
