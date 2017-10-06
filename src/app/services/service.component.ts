import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{



  constructor(private http: Http){ }



  getData(){
      return this.http
                 .get('https://api.github.com/users/edwardendovickiy/gists');
    }
}
    

