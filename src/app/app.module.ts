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

import { MusicPortalComponent } from './components/music-portal/music-portal.component';
import { MoviePortalComponent } from './components/movie-portal/movie-portal.component';

import { HeaderComponent, PlayerComponent, PlayerService, CoverService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    MusicPortalComponent,
    MoviePortalComponent
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
