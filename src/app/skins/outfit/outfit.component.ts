import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-outfit',
  templateUrl: './outfit.component.html'
})
export class OutfitComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Outfit';
  }

}
