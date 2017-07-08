import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArtistsService {
  artistUrl: string;

  constructor(private http: Http,
              private res: Response) { }
    
  getArtist(id:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this.http.get(this.artistUrl)
          .map(res => res.json());
  }   

  getArtistTopTracks(id:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/+' + id + '/top-tracks';
      return this.http.get(this.artistUrl)
          .map(res => res.json());
  }

  getSeveralArtists(ids:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists?ids=' + ids;
      return this.http.get(this.artistUrl)
          .map(res => res.json());
  }

}
