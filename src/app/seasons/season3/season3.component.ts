import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season3',
  templateUrl: './season3.component.html'
})
export class Season3Component {

  url:string = 'http://localhost:8080/api/items/search/findByObtained_Season?season=3&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 3';
  }

}
