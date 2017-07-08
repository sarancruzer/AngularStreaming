import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CoverComponent } from './components/cover/cover.component';
import { MusicPortalComponent } from './components/music-portal/music-portal.component';
import { MoviePortalComponent } from './components/movie-portal/movie-portal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch : 'full' },
  { path: 'cover', component: CoverComponent },
  { path: 'music', component: MusicPortalComponent },
  { path: 'movies', component: MoviePortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
