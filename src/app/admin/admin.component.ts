import { Component } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Admin';
  }

}
