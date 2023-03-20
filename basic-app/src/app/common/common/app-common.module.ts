import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/utils/loader/loader.component';
import { FilterComponent } from 'src/app/utils/filter/filter.component';

@NgModule({
  declarations: [
    FilterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    FilterComponent,
  ]
})
export class AppCommonModule { }
