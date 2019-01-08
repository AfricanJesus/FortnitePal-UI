import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-admin-manage',
  templateUrl: './manage-image.component.html',
  styleUrls: ['./manage-image.component.scss']
})
export class ManageImageComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.pageTitle = "Manage Images";
  }

  ngOnInit() {
  }

}

