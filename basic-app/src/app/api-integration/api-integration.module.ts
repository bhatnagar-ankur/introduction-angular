import { AppCommonModule } from '../common/common/app-common.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RedditComponent } from './components/reddit-api/reddit-api.component';
import { RedditHomeComponent } from '../reddit-home/reddit-home.component';
import { RedditSubPageComponent } from '../reddit-sub-page/reddit-sub-page.component';


@NgModule({
  declarations: [
    RedditComponent,
    RedditHomeComponent,
    RedditSubPageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
})
export class APIIntegrationModule { }
