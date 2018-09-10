import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-backbling',
  templateUrl: './backbling.component.html'
})
export class BackblingComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=BACKBLING&sort=rarityType&projection=itemModelSimple&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Back Bling';
  }

}
