import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class FileService {

  baseAPIUrl = environment.baseAPIUrl;

  constructor(private http: HttpClient) {
  }

  upload(folderName: string, file: File): Observable<HttpEvent<string>> {
    const formdata: FormData = new FormData();
    formdata.append('keyname', file.name);
    formdata.append('foldername', folderName);
    formdata.append('uploadfile', file);
    return this.http.post(this.baseAPIUrl + '/api/file/upload', formdata, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }

}
