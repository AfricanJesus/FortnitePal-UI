import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-glider',
  templateUrl: './glider.component.html'
})
export class GliderComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=GLIDER&sort=rarityType&projection=itemModelSimple&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Glider';
  }

}
