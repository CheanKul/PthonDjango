import { Injectable } from '@angular/core';
import { Blog } from '../Models/BlogModel';
import { HttpService } from '../Shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class BloglistService {
  bList: Blog[];

  constructor(private http: HttpService) { }

  getAllPosts() {
    this.http.get('/api/posts/').subscribe(
      (BlogList: Blog[]) => {
        this.bList = BlogList;
      }
    );
  }

}
