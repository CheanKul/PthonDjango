import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from '../Shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService, private router: Router) {
    this.loginFG = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }



  ngOnInit() {

    this.loginFG.reset();

  }

  onSubmit(form) {
    this.http.auth('api/auth/token', form.value).subscribe(
      (data) => {

        this.router.navigateByUrl('/listblog');

      }
    );
  }

}
