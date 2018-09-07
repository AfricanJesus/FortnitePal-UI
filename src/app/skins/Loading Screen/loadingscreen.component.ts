import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-skins-loadingscreen',
  templateUrl: './loadingscreen.component.html'
})
export class LoadingScreenComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Loading Screen';
  }

}
