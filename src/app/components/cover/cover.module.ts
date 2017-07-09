import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Search2Component } from './search2/search2.component';
import { SearchComponent } from './search/search.component';
import { CoverComponent } from './cover.component';
import { CoverInfoComponent } from './cover-info/cover-info.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    SearchComponent,
    Search2Component,
    CoverComponent,
    CoverInfoComponent,
    LikesComponent
  ],
  exports: [
    SearchComponent,
    CoverComponent,
    CoverInfoComponent,
    LikesComponent
  ]
})
export class CoverModule { }
