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
  public apiUrl = '';
  public condition: boolean=true;
  public commUrl = '';
  public commBody: string[] = [] ;
  public selectedGist : Gist;
  public selectedComm: Comm;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  public getUser(): void {
    this.apiUrl = 'https://api.github.com/users/'+this.user+'/gists';
    this.func();
    this.dataGist = [];
  }

  public func(): void {
    this.httpService.getData(this.apiUrl)
        .subscribe(data => {
          data.json().forEach(gist => {
              this.commUrl = gist.comments_url;
              this.commentFunc();
             for (let item in gist.files){
               let obj1: Gist = {
                 gistName: gist.files[item].filename,
                 rawUrl:gist.files[item].raw_url
               }
               this.dataGist.push(obj1);
             }
          })
          console.log(this.commUrl);
        });
  }

  public commentFunc(): void {
    this.httpService.getData(this.commUrl)
        .subscribe(data => {
          data.json().forEach(comm => {
              this.commBody.push(comm.body);

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



