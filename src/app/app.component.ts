import { Component, OnInit, ContentChild } from '@angular/core';
import { HttpService } from './services/service.component';
import { Response } from '@angular/http';
import { Gist } from './models/gist.model';
import { Comm } from './models/comm.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  public dataGist: Gist[] = [];
  public user = '';
  public condition: boolean = true;
  public commBody: string[] = [] ;
  public selectedGist: Gist;
  public selectedComm: Comm;


  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  public getUser(): void {
    const apiUrl = 'https://api.github.com/users/'+this.user+'/gists';
    this.getList(apiUrl);
    this.dataGist = [];

  }

  public getList(url: string): void {
    this.dataGist = [];
    this.httpService
      .getData(url)
      .subscribe(data => {
        data.json().forEach(gist => {
          for (let item in gist.files) {
            let obj1 = new Gist(
             gist.files[item].filename,
             gist.files[item].raw_url,
            );
            this.dataGist.push(obj1);
            this.getCommentsFor(obj1, gist.comments_url);
            console.log(obj1);
          }
        })
      });
  }

  public getCommentsFor(gist, url): void {
    gist.comments = [];
    this.httpService.getData(url)
      .subscribe(data => {
        data.json().forEach(comm => {
          gist.comments.push(comm.body);

        })
      });
  }

  public onSelect( item: Gist): void {
    this.selectedGist = item;
  }

  public onSelectComm(comment: Comm): void {
    this.selectedComm = comment;
  }

}



