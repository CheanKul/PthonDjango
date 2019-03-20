import { Injectable } from '@angular/core';
import { HttpService } from '../Shared/http.service';
import { Blog } from '../Models/BlogModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogaddService {
  bList: Blog;

  constructor(private http: HttpService) { }

  addPosts(model: Blog): Observable<Blog> {
    return this.http.post('/api/posts/', model);
  }

  updatePosts(model): Observable<Blog> {
    return this.http.put('/api/posts/' + model.Id + '/', model);
  }

  getPost(id: number): Observable<Blog> {
    return this.http.get('/api/posts/' + id + '/');
  }
}
