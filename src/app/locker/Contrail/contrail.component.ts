import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-locker-contrail',
  templateUrl: './contrail.component.html'
})
export class ContrailComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Contrail';
  }

}
