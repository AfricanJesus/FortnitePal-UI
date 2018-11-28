import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-glider',
  templateUrl: './glider.component.html'
})
export class GliderComponent {

  url: string = '/api/items/search/findByItemType?item=GLIDER&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Glider';
  }

}
