import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../Shared/http.service';
import { BloglistService } from './bloglist.service';
import { Blog } from '../Models/BlogModel';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { BlogaddComponent } from '../blogadd/blogadd.component';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers: [BloglistService]
})
export class BloglistComponent implements OnInit, OnDestroy {

  displayedColumnss: string[] = ['Actions'];

  dataSource: MatTableDataSource<Blog>;
  displayedColumns: string[];

  constructor(public dialog: MatDialog, private http: BloglistService, private common: HttpService) { }

  ngOnInit() {
    this.getAllBlogs();
  }


  getAllBlogs() {
    this.displayedColumns = [];
    this.http.getAllPosts().subscribe(
      (list: Blog[]) => {
        debugger;
        this.dataSource = new MatTableDataSource(list);
        this.displayedColumns = [...Object.keys(list[0]), ...this.displayedColumnss];
        console.log(this.displayedColumns);
      });
  }


  deleteblog(id: number) {
    this.http.deletePost(id).subscribe(
      (data) => {
        this.ngOnInit();
      }
    );
  }


  openDialog(id): void {
    this.common.BlogsId.next(id);
    const dialogRef = this.dialog.open(BlogaddComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBlogs();

    });
  }

  ngOnDestroy(): void {
    this.common.BlogsId.next(0);
  }
}
