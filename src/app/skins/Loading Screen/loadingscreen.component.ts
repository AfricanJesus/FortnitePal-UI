import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-loadingscreen',
  templateUrl: './loadingscreen.component.html'
})
export class LoadingScreenComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=LOADINGSCREEN&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Loading Screen';
  }

}
