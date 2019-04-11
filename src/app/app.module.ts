import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { HttpService } from './Shared/http.service';
import { BlogaddComponent } from './blogadd/blogadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';
import { AuthInterceptor } from './AuthInterceptor'

@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BlogaddComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  providers: [HttpService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [BlogaddComponent]
})
export class AppModule { }
