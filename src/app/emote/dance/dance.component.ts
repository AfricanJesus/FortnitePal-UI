import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-dance',
  templateUrl: './dance.component.html'
})
export class DanceComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Dance';
  }

}
