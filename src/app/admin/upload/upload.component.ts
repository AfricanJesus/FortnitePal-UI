import {Component} from '@angular/core';
import {AppService} from "../../app.service";
import {UploadService} from "../../shared/services/upload.service";
import {FileUploader} from "ng2-file-upload";
import {IOption} from "ng-select";


@Component({
  selector: 'app-admin-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss',
    '../../../vendor/libs/ngx-dropzone-wrapper/ngx-dropzone-wrapper.scss']
})
export class UploadComponent {

  singleSelectValue: IOption;

  constructor(private appService: AppService, private uploadService: UploadService) {
    this.appService.pageTitle = "Upload";
  }

  selectOptions: Array<IOption> = [
    {label: 'Backbling', value: 'backbling'},
    {label: 'Background', value: 'background'},
    {label: 'Challenge', value: 'challenge'},
    {label: 'Contrail', value: 'contrail'},
    {label: 'Dance', value: 'dance'},
    {label: 'Emoticon', value: 'emoticon'},
    {label: 'Glider', value: 'glider'},
    {label: 'Harvesting Tool', value: 'harvestingtool'},
    {label: 'Icons', value: 'icons'},
    {label: 'Loading Screen', value: 'loadingscreen'},
    {label: 'Music', value: 'music'},
    {label: 'Outfit', value: 'outfit'},
    {label: 'Spray', value: 'spray'},
    {label: 'Toy', value: 'toy'},
    {label: 'Pet', value: 'pet'},
  ];

  uploader = new FileUploader({url: '/upload/' + this.singleSelectValue});
  hasBaseDropZoneOver = false;

  fileOver(e: any) {
    this.hasBaseDropZoneOver = e;
  }
}
