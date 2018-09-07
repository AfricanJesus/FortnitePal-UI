import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season2',
  templateUrl: './season2.component.html'
})
export class Season2Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 2';
  }

}
