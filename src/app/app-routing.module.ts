import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogaddComponent } from './blogadd/blogadd.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'listblog', component: BloglistComponent },
  { path: 'updateblog/:id', component: BlogaddComponent },
  { path: 'updateblog', component: BlogaddComponent },
  { path: '', component: BlogComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
