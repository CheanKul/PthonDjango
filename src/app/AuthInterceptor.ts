import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './Shared/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: HttpService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //const authToken = this.auth.getAuthorizationToken();
        const authReq = req.clone({
            setHeaders: {
                //'Authorization': authToken,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                //'X-CSRFToken': document.cookie.split(';')[1].split('=')[1]
            }
        });

        return next.handle(authReq);
    }
} 