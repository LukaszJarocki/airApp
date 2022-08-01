import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportDataService {
  url: string = 'http://localhost:4700/api/visitorData';

  constructor(private http: HttpClient) {}

  createVisit(visitData: any): Observable<any> {
    return this.http.post(this.url, visitData);
  }

  getAllVisitors(): Observable<any> {
    return this.http.get(this.url);
  }

  editVisitorData(visitDataEdit: any): Observable<any> {
    return this.http.put(this.url + '/' + visitDataEdit._id, visitDataEdit);
  }

  deleteVisitorData(itemToRemove: any): Observable<any> {
    return this.http.delete(this.url + '/' + itemToRemove);
  }
}
