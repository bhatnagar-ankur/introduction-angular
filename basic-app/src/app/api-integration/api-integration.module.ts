import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './components/reddit-api/reddit-api.component';
import { AppCommonModule } from '../common/common/app-common.module';


@NgModule({
  declarations: [
    ApiComponent,
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
})
export class APIIntegrationModule { }
