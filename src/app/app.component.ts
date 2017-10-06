import { Component, OnInit } from '@angular/core';
import { HttpService }       from './services/service.component';
import { Response }          from '@angular/http';
import { Gist }              from './models/gist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  public dataGist: Gist[] = [];
  public user = '';
  public apiUrl = '';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  public getUser(): void {
    this.apiUrl = 'https://api.github.com/users/'+this.user+'/gists';
    this.func();
  }

  public func(): void {
    this.httpService.getData(this.apiUrl)
        .subscribe(data => {
          data.json().forEach(gist => {
             for (let item in gist.files){
               let obj1: Gist = {
                 gistName: gist.files[item].filename,
                 rawUrl:gist.files[item].raw_url
               }
               this.dataGist.push(obj1);
             }
          })
        });
  }
}
