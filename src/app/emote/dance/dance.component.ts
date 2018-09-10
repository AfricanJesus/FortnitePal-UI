import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-dance',
  templateUrl: './dance.component.html'
})
export class DanceComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=DANCE&sort=rarityType&projection=itemModelSimple&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Dance';
  }

}
