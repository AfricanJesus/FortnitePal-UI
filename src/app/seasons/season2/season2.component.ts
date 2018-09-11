import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season2',
  templateUrl: './season2.component.html'
})
export class Season2Component {

  url:string = 'http://localhost:8080/api/items/search/findByObtained_Season?season=2&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 2';
  }

}
