import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  public urlFile = 'http://localhost:8089/uploadFile';
  public urlData = 'http://localhost:8089/data';


  constructor(private http: HttpClient) { }

  postFile(file: any): Observable<any> {
    return this.http.post<any>(this.urlFile, file);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.urlData, data);
  }
}
