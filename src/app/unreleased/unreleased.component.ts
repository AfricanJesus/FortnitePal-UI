import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-unreleased',
  templateUrl: './unreleased.component.html'
})
export class UnreleasedComponent{

  url: string = 'http://localhost:8080/api/items/search/findByStatus?status=UNRELEASED&sort=rarityType&projection=itemModelSimple&sort=name';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Unreleased';
  }

}
