import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    
  }

  getFilmInfo():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=87b8151a&s=war');
  }
}
