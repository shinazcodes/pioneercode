import { Component, OnInit, Renderer2, Output } from '@angular/core';
import { Http } from '@angular/http';
import { GetjsonService } from '../../getjson.service';
import { CoursesItem, RootObject, TopicsItem } from '../../pages/data';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  
  public courses: CoursesItem[];
  coursename: string;
  clicked= false;

  constructor(private getjson: GetjsonService, private http: Http, private route: ActivatedRoute, 
    private router: Router, private renderer: Renderer2) { }
  async ngOnInit() {
  this.route.params.subscribe((params: Params) => this.coursename = params['id']);
    // this.http.get('./data/db.json').subscribe(res => {
      // this.data = res.json();
      const res = await this.getjson.getCourseName();
        this.courses = <CoursesItem[]>res.json().courses;
        // console.log('TESTING ' + this.courses);
        // console.log('Test', this.courses);
      // this.courses = <CoursesItem[]>res.json().courses;
  }
  open() {
    this.clicked=!this.clicked;
   
}

 } // play(course) {
  //   const url = course.name;
  //   this.router.navigate([url], { relativeTo: this.route });
  //   console.log('courses testing:'+ course.name);
  // }
