import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-emoticon',
  templateUrl: './emoticon.component.html'
})
export class EmoticonComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Emoticon';
  }

}
