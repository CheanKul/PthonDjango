import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogaddComponent } from './blogadd/blogadd.component';

const routes: Routes = [
  { path: 'listblog', component: BloglistComponent },
  { path: 'updateblog', component: BlogaddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
