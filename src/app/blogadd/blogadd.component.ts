import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogaddService } from './blogadd.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Blog } from '../Models/BlogModel';
import { Observable } from 'rxjs';
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-blogadd',
  templateUrl: './blogadd.component.html',
  styleUrls: ['./blogadd.component.css']
})
export class BlogaddComponent implements OnInit {

  addPostFG: FormGroup;
  blog$: Blog;
  paramid: Observable<Blog> = null;
  swapButton: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private http: BlogaddService, private common: HttpService) {
    this.addPostFG = this.fb.group({
      Id: [''],
      Header: ['', [Validators.required, Validators.maxLength(200)]],
      Content: ['', [Validators.required, Validators.maxLength(200)]],
      ImageURL: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  ngOnInit() {
    this.addPostFG.reset();

    this.common.BlogId.subscribe((id) => {
      if (id != 0) {
        this.http.getPost(id).subscribe((data) => {
          this.swapButton = true;
          this.addPostFG.controls['Id'].setValue(data.id);
          this.addPostFG.controls['Header'].setValue(data.Header);
          this.addPostFG.controls['Content'].setValue(data.Content);
          this.addPostFG.controls['ImageURL'].setValue(data.ImageURL);
        });
      }
    });

  }


  addBlog(form) {
    this.http.addPosts(form.value).subscribe(
      (data) => {
        debugger;
        this.router.navigateByUrl('/listblog');
      }
    );
  }

  updateBlog(form) {
    console.log(form.value)
    this.http.updatePosts(form.value).subscribe((data) => {
      this.router.navigate(['listblog/'])
    });
  }


}
