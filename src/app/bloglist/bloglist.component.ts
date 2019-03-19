import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../Shared/http.service';
import { BloglistService } from './bloglist.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers: [BloglistService]
})
export class BloglistComponent implements OnInit {

  blogList: any = [];

  constructor(private http: BloglistService) { }

  ngOnInit() {
    this.blogList = this.http.getAllPosts();
    console.log(this.blogList);
  }

}
