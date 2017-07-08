import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TracksService {
  trackUrl: string;
  baseUrl = 'https://api.spotify.com/v1';

  get = this.http.get(this.trackUrl).map(res => res.json());

  constructor(private http: Http,
              private res: Response) { }
    
  getTrack(id:string){
      this.trackUrl = this.baseUrl + '/tracks/' + id;
      return this.get;
  }   
    
  getSeveralTracks(ids:string){
      this.trackUrl = this.baseUrl + '/tracks?ids=' + ids;
      return this.get;
  }   
    
  getTrackFromAlbum(id:string){
      this.trackUrl = this.baseUrl + '/albums/' + id + '/tracks';
      return this.get;
  }   

  getTrackFromUser(id:string){
      this.trackUrl = this.baseUrl + '/me/tracks';
      return this.get;
  }   

}
