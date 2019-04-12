import { Component, OnInit } from '@angular/core';
import { HttpService } from './Shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.http.isLogedIn);
    this.http.isLogIn();
  }
  /**
   *
   */
  constructor(private http: HttpService) {

  }

}
