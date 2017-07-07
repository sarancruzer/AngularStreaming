import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CoverComponent } from './cover.component';
import { CoverInfoComponent } from './cover-info/cover-info.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    CoverComponent,
    CoverInfoComponent,
    LikesComponent
  ],
  exports: [
    CoverComponent,
    CoverInfoComponent,
    LikesComponent
  ]
})
export class CoverModule { }
