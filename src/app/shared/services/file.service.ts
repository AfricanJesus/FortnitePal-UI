import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FileService {

  constructor(private http: HttpClient) {
  }


  upload(folderName: string, file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '/upload/' + folderName, formdata, {
        reportProgress: true,
        responseType: 'text'
      }
    );
    return this.http.request(req);
  }

  allImagesInDirectory(): Observable<FolderNode[]> {
    return this.http.get<FolderNode[]>("/images/all");
  }
}

export interface FileNode {
  name: string;
}

export interface FolderNode {
  name: string;
  files: File[];
}
