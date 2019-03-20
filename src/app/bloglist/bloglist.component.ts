import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../Shared/http.service';
import { BloglistService } from './bloglist.service';
import { Blog } from '../Models/BlogModel';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers: [BloglistService]
})
export class BloglistComponent implements OnInit, OnDestroy {

  // displayedColumns: string[] = ;

  dataSource: Blog[] = [];

  constructor(private http: BloglistService, private common: HttpService) { }

  ngOnInit() {
    this.http.getAllPosts().subscribe(
      (list: Blog[]) => {
        this.dataSource = list;
      });
  }


  deleteblog(id: number) {
    this.http.deletePost(id).subscribe(
      (data) => {
        this.ngOnInit();
      }
    )
  }

  modelOpen(id) {
    console.log(id);
    this.common.BlogsId.next(id);
  }

  ngOnDestroy(): void {
    this.common.BlogsId.next(0);
  }
}
