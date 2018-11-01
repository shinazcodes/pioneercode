import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { CoursesItem } from '../../pages/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  db;
  courses: CoursesItem[];
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  ngOnInit() {

    this.db = localStorage.getItem('courseData');

    this.http.get('./data/db.json').subscribe(res => {
      // this.data = res.json();
      this.courses = <CoursesItem[]>res.json().courses;
      console.log('TESTING ' + this.courses);
      console.log('Test', this.courses);
    console.log('courses testing:' + this.courses);
  });
  }
  load(lang) {
    console.log('function called');
    const url = '/course/' + lang;
    this.router.navigate([url]);

}
}
