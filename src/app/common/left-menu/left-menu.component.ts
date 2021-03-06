import { Component, OnInit, Renderer2, Output } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { GetjsonService } from '../../getjson.service';
import { CoursesItem, RootObject, TopicsItem } from '../../pages/data';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  db;
  public courses: CoursesItem[];
  coursename: string;
  clicked = false;

  constructor(private getjson: GetjsonService, private http: Http, private route: ActivatedRoute,
    private router: Router, private renderer: Renderer2) { }
  async ngOnInit() {
  this.route.params.subscribe((params: Params) => this.coursename = params['id']);
    // this.http.get('./data/db.json').subscribe(res => {
      // this.data = res.json();
      // const res = await this.getjson.getCourseName();
      //   this.courses = <CoursesItem[]>res.json().courses;
        // console.log('TESTING ' + this.courses);
        // console.log('Test', this.courses);
      // this.courses = <CoursesItem[]>res.json().courses;
      const data = localStorage.getItem('courseData');
      this.db = JSON.parse(data);
      this.courses = this.db.courses;
  }
  open() {
    this.clicked = !this.clicked;
}
storedata(videoid, src) {
  this.getjson.id = videoid;
  this.getjson.src = src;
  console.log('videoid'+this.getjson.src);
  console.log('id'+this.getjson.id);
  
}

 } // play(course) {
  //   const url = course.name;
  //   this.router.navigate([url], { relativeTo: this.route });
  //   console.log('courses testing:'+ course.name);
  // }
