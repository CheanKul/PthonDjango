import { Injectable } from '@angular/core';
import { Blog } from '../Models/BlogModel';
import { HttpService } from '../Shared/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloglistService {
  bList: Blog[];

  constructor(private http: HttpService) { }

  getAllPosts(): Observable<Blog[]> {
    return this.http.get('/api/posts/posts/');
  }

  deletePost(id): Observable<Blog> {
    return this.http.delete('/api/posts/posts/' + id + '/');
  }
}
