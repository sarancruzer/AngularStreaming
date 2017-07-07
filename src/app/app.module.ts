import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdToolbarModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { PlayerComponent } from './components/player/player.component';
import { CoverComponent } from './components/cover/cover.component';

import { HeaderComponent, PlayerService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CoverComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MaterialModule, MdToolbarModule, MdIconModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
