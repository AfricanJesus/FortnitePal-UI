import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";
import {FileService} from "../../../shared/services/file.service";
import {FileItem, FileUploader} from "ng2-file-upload";


@Component({
  selector: 'app-admin-upload',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})


export class UploadImageComponent implements OnInit {

  uploadRequest: UploadRequest;
  uploader = new FileUploader({});

  constructor(private appService: AppService, private uploadService: FileService) {
    this.appService.pageTitle = "Upload";
  }

  ngOnInit() {
    this.uploadRequest = new UploadRequest('', null);
  }

  onUpload() {
    this.changeURLOnAllItems(this.uploader.getNotUploadedItems())
    this.uploader.uploadAll();
  }

  changeURLOnAllItems(items: FileItem[]): void {
    for (let item of items) {
      item.url = '/upload/' + this.uploadRequest.folderName;
    }
  }

  resetForm() {
    this.uploadRequest = new UploadRequest('', null);
  }

  folderNames = [
    'backbling',
    'background',
    'challenge',
    'contrail',
    'dance',
    'emoticon',
    'glider',
    'harvestingtool',
    'icons',
    'loadingscreen',
    'music',
    'outfit',
    'spray',
    'toy',
    'pet'
  ]
}

export class UploadRequest {
  constructor(
    public folderName: string,
    public file: File) {
  }
}

