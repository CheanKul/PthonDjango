import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Authorization': 'bearer ' + AppGlobal.getUser().token
    'X-CSRFToken': document.cookie.split(';')[1].split('=')[1]
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  BlogsId: BehaviorSubject<number> = new BehaviorSubject(0);
  BlogId = this.BlogsId.asObservable();


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

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url, headers)
      .pipe(map((response: Response) => <any>response));
  }

}
