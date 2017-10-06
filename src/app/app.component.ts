import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/service.component';
import { Response } from '@angular/http';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  public apiUrl = 'https://api.github.com/users/edwardendovickiy/gists';

  public dataGist: User[];

  files: string[] = [];
  url: string[] = [];

  ngOnInit() {
    this.httpService.getData()
      .subscribe(data => {
        data.json().forEach(gist => {

          for (let item in gist.files) {
            //console.log(gist.files[item].raw_url)
            //debugger;
            this.files.push(item)
            this.url.push(gist.files[item].raw_url);
          }
        })



        // for (let item in data.json()[0].files) {
        //   console.log(item)
        //   this.files.push(item);
        // }
        // this.user.forEach((file) => this.files.push(file))
        // console.log(this.files)
    });

  }
}
