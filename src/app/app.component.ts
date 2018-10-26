import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  videos = {};
  constructor(private http: Http) { }
  ngOnInit() {
    console.log('data ');
    this.http.get('./data/db.json').subscribe(res => {
      this.videos = res.json();
    });
    console.log('data  '+ this.videos);
  }
}
