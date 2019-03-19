import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Authorization': 'bearer ' + AppGlobal.getUser().token
    'csrftoken': 'aD8Sdb5CcwoQqNgrzOhuZaTHdBRovChJXagehudjPirjXR7AoQVp4TGWNwR652gF'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  get(url: string): Observable<any> {
    return this.httpClient.get(url)
      .pipe(map(res => (<any>res)));
  }

  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this.httpClient.post(url, body, headers)
      .pipe(map((response: Response) => <any>response));
  }


  put(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this.httpClient.put(url, body, headers)
      .pipe(map((response: Response) => <any>response));
  }

}
