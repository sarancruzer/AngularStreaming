import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
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
    // MaterialModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
