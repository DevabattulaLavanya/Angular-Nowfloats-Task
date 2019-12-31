import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationinfo;
  title = 'NowfloatsTask';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/ftllh').subscribe(data => {
      console.log(data);
      this.applicationinfo = data;
    });
  }
}
