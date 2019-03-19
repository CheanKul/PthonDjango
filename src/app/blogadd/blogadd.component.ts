import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogaddService } from './blogadd.service';

@Component({
  selector: 'app-blogadd',
  templateUrl: './blogadd.component.html',
  styleUrls: ['./blogadd.component.css']
})
export class BlogaddComponent implements OnInit {

  addPostFG: FormGroup;

  constructor(private fb: FormBuilder, private http: BlogaddService) {
    this.addPostFG = this.fb.group({
      Header: ['', [Validators.required, Validators.maxLength(200)]],
      Content: ['', [Validators.required, Validators.maxLength(200)]],
      ImageURL: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  ngOnInit() {

  }


  addBlog(form) {
    console.log(form.value);
    alert(this.http.addPosts(form.value));
  }

}
