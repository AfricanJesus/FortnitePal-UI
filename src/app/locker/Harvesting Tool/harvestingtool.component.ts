import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-locker-harvestingtool',
  templateUrl: './harvestingtool.component.html'
})
export class HarvestingToolComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Harvesting Tool';
  }

}
