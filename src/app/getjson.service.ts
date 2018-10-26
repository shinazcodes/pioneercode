import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RootObject, CoursesItem } from './pages/data';


@Injectable()
export class GetjsonService implements OnInit{
  data: RootObject;
  course: CoursesItem[];
  constructor(private http: Http) { }
  ngOnInit() {
  
}
public getCourseName(){
  return this.http.get('./data/db.json').toPromise();

}
}
