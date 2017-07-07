import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdToolbarModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { CoverModule } from './components/cover/cover.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { PlayerComponent } from './components/player/player.component';
import { SearchComponent } from './components/search/search.component';

import { HeaderComponent, LikesComponent, PlayerService, CoverService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    SearchComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MaterialModule, MdToolbarModule, MdIconModule,
    CoverModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    CoverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
