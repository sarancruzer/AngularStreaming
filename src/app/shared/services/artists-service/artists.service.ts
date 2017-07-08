import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistsService {
  artistUrl: string;
  baseUrl = 'https://api.spotify.com/v1';

  get = this.http.get(this.artistUrl).map(res => res.json());

  constructor(private http: Http,
              private res: Response) { }
    
  getArtist(id:string){
      this.artistUrl = this.baseUrl + '/artists/' + id;
      return this.get;
  }   

  getArtistTopTracks(id:string){
      this.artistUrl = this.baseUrl +  '/artists/+' + id + '/top-tracks';
      return this.get;
  }

  getSeveralArtists(ids:string){
      this.artistUrl = this.baseUrl + '/artists?ids=' + ids;
      return this.get;
  }

}
