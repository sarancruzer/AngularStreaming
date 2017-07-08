import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlayerService {
  baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: Http,
              private res: Response) { } 
  
  shufflePlayer(param: any): Observable<any> {
    let body = JSON.stringify(param);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 

    return this.http
        .put(this.baseUrl + '/me/player/shuffle', body, options)
        .map(res => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
