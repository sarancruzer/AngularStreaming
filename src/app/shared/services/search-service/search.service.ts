import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  clientId: string = '52fc866a38084683b20018c7b3e8d25d';
  artistsUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.clientId+'&q=';
  artistUrl: string;

  constructor(private http: Http) {}

  searchArtists(searchTerm: string) {
    let url = this.artistsUrl + searchTerm;
    return this.http.get(url).map(res => res.json());
  }

}
