import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season1',
  templateUrl: './season1.component.html'
})
export class Season1Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 1';
  }

}
