import {Component, OnInit} from '@angular/core';
import {AppService } from '../../app.service';
import RootObject = ItemSimpleModule.RootObject;
import Item = ItemSimpleModule.Item;
import {ItemSimpleService} from "../../shared/services/itemsimple.service";


@Component({
  selector: 'app-skins-outfit',
  templateUrl: './outfit.component.html'
})
export class OutfitComponent implements OnInit{
  public outfits: Item[];

  public url: string = 'http://localhost:8080/api/items/search/findByItemType?item=OUTFIT&sort=rarityType&projection=itemModelSimple&size=500';
  constructor(private appService: AppService, private itemSimpleService: ItemSimpleService) {
    this.appService.pageTitle = 'Outfit';
  }

  ngOnInit(){
    this.getItems();
  }


  getItems(){
    this.itemSimpleService.getItems(this.url).subscribe(
      (data: RootObject) => { this.outfits = data._embedded.items},
      err => console.error(err),
      () => console.log('outfits loaded')
    );
  }

}
