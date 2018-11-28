import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-contrail',
  templateUrl: './contrail.component.html'
})
export class ContrailComponent {

  url: string = '/api/items/search/findByItemType?item=CONTRAIL&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Contrail';
  }

}
