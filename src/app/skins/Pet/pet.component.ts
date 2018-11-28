import { Component } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-skins-pet',
  templateUrl: './pet.component.html'
})
export class PetComponent {

  url: string = '/api/items/search/findByItemType?item=PET&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Pet';
  }

}
