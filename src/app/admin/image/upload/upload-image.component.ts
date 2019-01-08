import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";
import {FileService} from "../../../shared/services/file.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-admin-upload',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss', '../../../../vendor/libs/ngx-sweetalert2/ngx-sweetalert2.scss'],
})


export class UploadImageComponent implements OnInit {

  selectedFile: File = null;
  selectedFileName: String;
  url = 'http://fortnitepal.s3.amazonaws.com/images/background/basic.png';
  uploadForm: FormGroup;
  baseAPIUrl = environment.baseAPIUrl;

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

  constructor(private appService: AppService, private uploadService: FileService, private fb: FormBuilder) {
    this.appService.pageTitle = "Upload";
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      folderName: ['', Validators.required],
      uploadFile: ['', Validators.required]
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  resetForm() {
    this.uploadForm.reset();
    this.selectedFileName = '';
    this.url = 'http://fortnitepal.s3.amazonaws.com/images/background/basic.png';
    console.log(this.baseAPIUrl);
  }

  onUpload() {
    this.uploadService.upload(this.uploadForm.get('folderName').value, this.selectedFile).subscribe(
      () => {
      }, error1 => {
      },
      () => {
        this.resetForm(), document.getElementById("successModal").click()
      });
  }

}


