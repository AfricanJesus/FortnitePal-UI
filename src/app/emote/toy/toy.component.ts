import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-toy',
  templateUrl: './toy.component.html'
})
export class ToyComponent {

  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=TOY&sort=rarityType&projection=itemModelSimple&size=500&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Toy';
  }

}
