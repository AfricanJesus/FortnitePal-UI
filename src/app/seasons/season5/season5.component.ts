import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season5',
  templateUrl: './season5.component.html'
})
export class Season5Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 5';
  }

}
