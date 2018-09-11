import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-spray',
  templateUrl: './spray.component.html'
})
export class SprayComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=SPRAY&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Spray';
  }

}
