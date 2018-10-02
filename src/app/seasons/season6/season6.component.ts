import { Component } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-seasons-season6',
  templateUrl: './season6.component.html'
})
export class Season6Component {

  url:string = 'http://localhost:8080/api/items/search/findByObtained_Season?season=6&sort=obtained_tier&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 6';
  }

}
