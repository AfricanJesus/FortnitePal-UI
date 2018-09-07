import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-spray',
  templateUrl: './spray.component.html'
})
export class SprayComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Spray';
  }

}
