import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-locker-backbling',
  templateUrl: './backbling.component.html'
})
export class BackblingComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Back Bling';
  }

}
