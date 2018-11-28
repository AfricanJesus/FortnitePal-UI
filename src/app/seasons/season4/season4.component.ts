import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season4',
  templateUrl: './season4.component.html'
})
export class Season4Component {

  url: string = '/api/items/search/findByObtained_Season?season=4&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 4';
  }

}
