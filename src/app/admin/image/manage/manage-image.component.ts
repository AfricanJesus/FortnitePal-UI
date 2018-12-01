import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";
import {FileService, FolderNode} from "../../../shared/services/file.service";

@Component({
  selector: 'app-admin-manage',
  templateUrl: './manage-image.component.html',
  styleUrls: ['./manage-image.component.scss']
})
export class ManageImageComponent implements OnInit {

  folderNodes: FolderNode[];
  selectedKeys: any[] = ['0_1'];
  imageUrl: string = '';


  constructor(private appService: AppService, private fileService: FileService) {
    this.appService.pageTitle = "Manage Images";
  }

  ngOnInit() {
    this.getFileTree();
  }

  getFileTree() {
    this.fileService.allImagesInDirectory().subscribe(
      (data: FolderNode[]) => {
        this.folderNodes = data;
      },
      err => console.error(err),
      () => {
        this.changeImage(), console.log("Tree Data Loaded")
      }
    );
  }

  refreshTree(): void {
    this.getFileTree();
  }

  changeImage(): void {
    if (this.selectedKeys[0].length >= 3) {
      var url = "/images/";
      var split = this.selectedKeys[0].split("_");
      url += this.folderNodes[split[0]].name;
      url += "/" + this.folderNodes[split[0]].files[split[1]].name;
      this.imageUrl = url;
    }
  }

}

