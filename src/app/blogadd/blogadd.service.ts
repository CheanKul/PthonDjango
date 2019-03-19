import { Injectable } from '@angular/core';
import { HttpService } from '../Shared/http.service';
import { Blog } from '../Models/BlogModel';

@Injectable({
  providedIn: 'root'
})
export class BlogaddService {
  bList: Blog;

  constructor(private http: HttpService) { }

  addPosts(model) {
    this.http.post('/api/posts/', model).subscribe(
      (BlogList: Blog) => {
        debugger;
        this.bList = BlogList;
      }
    );
  }
}
