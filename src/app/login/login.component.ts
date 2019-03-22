import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.loginFG = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }



  ngOnInit() {
    this.loginFG.reset();
  }

  onSubmit(form) {
    this.http.auth("http://localhost:8000/api/authlogin/", form.value).subscribe(
      (data) => {
        debugger;
        console.log(data);
      }
    );
  }

}
