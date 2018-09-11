import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-emoticon',
  templateUrl: './emoticon.component.html'
})
export class EmoticonComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=EMOTICON&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Emoticon';
  }

}
