import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedditHomeComponent } from './reddit-home/reddit-home.component';
import { RedditSubPageComponent } from './reddit-sub-page/reddit-sub-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api-example', component: RedditHomeComponent },
  { path: 'sub-page/:url', component: RedditSubPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
