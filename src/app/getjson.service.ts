import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RootObject, CoursesItem } from './pages/data';


@Injectable()
export class GetjsonService implements OnInit{
  data: RootObject;
  course: CoursesItem[];
  _id: string;
  _src: string;
  constructor(private http: Http) { }
  ngOnInit() {
}
public getCourseName() {
  return this.http.get('./data/db.json').toPromise();

}
public get id(): string {
  return this._id;
}
public set id(v: string) {
  this._id = v;
}
public get src(): string {
  return this._src;
}
public set src(v: string) {
  this._src = v;
}
}
