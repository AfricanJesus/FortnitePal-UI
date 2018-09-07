import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-seasons-season4',
  templateUrl: './season4.component.html'
})
export class Season4Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Season 4';
  }

}
