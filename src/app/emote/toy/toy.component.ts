import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-emote-toy',
  templateUrl: './toy.component.html'
})
export class ToyComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Toy';
  }

}
