import {Component, OnInit} from '@angular/core';
import {AppService } from '../../app.service';
import Item = ItemSimpleModule.Item;


@Component({
  selector: 'app-skins-outfit',
  templateUrl: './outfit.component.html'
})
export class OutfitComponent{
  outfits: Item[];
  url: string = 'http://localhost:8080/api/items/search/findByItemType?item=OUTFIT&sort=rarityType&projection=itemModelSimple&size=500';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Outfit';
  }


}
