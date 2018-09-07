import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season3',
  templateUrl: './season3.component.html'
})
export class Season3Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 3';
  }

}
