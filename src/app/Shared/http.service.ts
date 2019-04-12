import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';
import { User } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  BlogsId: BehaviorSubject<number> = new BehaviorSubject(0);
  BlogId = this.BlogsId.asObservable();
  isLogedIn: any = localStorage.getItem('token') != null;

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': ' JWT ' + localStorage.getItem('token'),
    })
  };


  constructor(private httpClient: HttpClient) { }


  get(url: string): Observable<any> {
    return this.httpClient.get(url)
      .pipe(map(res => (<any>res)));
  }

  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this.httpClient.post(url, body, this.headers)
      .pipe(map((response: Response) => <any>response));
  }


  put(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this.httpClient.put(url, body, this.headers)
      .pipe(map((response: Response) => <any>response));
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.headers)
      .pipe(map((response: Response) => <any>response));
  }

  auth(url: string, model): Observable<any> {
    return this.httpClient.post<User>(url, model, this.headers)
      .pipe(map((response: User) => {
        debugger;
        this.isLogedIn = response.token;
        console.log(this.isLogedIn);
        localStorage.setItem('token', this.isLogedIn);
      }));
  }

  isLogIn() {
    return localStorage.getItem('token') != null;
  }
  getAuthorizationToken() {
    return document.cookie.split(';')[1].split('=')[1];
  }
}
