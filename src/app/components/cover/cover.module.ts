import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CoverComponent } from './cover.component';
import { CoverInfoComponent } from './cover-info/cover-info.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    CoverComponent,
    CoverInfoComponent
  ],
  exports: [
    CoverComponent,
    CoverInfoComponent
  ]
})
export class CoverModule { }
