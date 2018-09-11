import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-harvestingtool',
  templateUrl: './harvestingtool.component.html'
})
export class HarvestingToolComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=HARVESTINGTOOL&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Harvesting Tool';
  }

}
