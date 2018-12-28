import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';
import { CoursesItem } from '../pages/data';
import { GetjsonService } from '../getjson.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  courses: CoursesItem[];
  player: YT.Player;
  videoid:string;
  videoname: any;
  height: number;
  public ytEvent;
  vid: any;
  db;
  topic: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private getjson: GetjsonService,
    private http: Http) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
    //     this.route.queryParams.subscribe((queryparams: Params) => { const vid = queryparams['watch']; this.getvideo(vid); } );
    //     this.vid = !this.vid;
        this.route.params.subscribe((params: Params) => this.topic = params['topics']);
    //     this.videoid = this.route.snapshot.queryParams['watch'];     }
    this.videoid = this.getjson.id;
    this.vid = !this.vid;
  }
  });
   }
   getvideo(vid) {
     this.videoid = vid;
   }
  ngOnInit() {
    // this.http.get('./data/db.json').subscribe(res => {
    //   // this.data = res.json();
    //   this.courses = <CoursesItem[]>res.json().courses; });
    this.route.params.subscribe((params: Params) => {this.videoname = params['topics']; });
    // this.route.queryParams.subscribe((queryparams: Params) => { this.videoid = queryparams['watch']; } );
    // this.route.fragment.subscribe((fragment) => {this.vid = fragment; } );
    this.videoid = this.getjson.id;
    const data = localStorage.getItem('courseData');
      this.db = JSON.parse(data);
      this.courses = this.db.courses;
    // console.log('name of video  ' + this.videos.name );
  }
  ngOnChanges() {
    // this.route.params.subscribe((params: Params) => {this.videoname = params['topics']; });
    // this.route.queryParams.subscribe((queryparams: Params) => { this.videoid = queryparams['watch']; } );
    // console.log('videoid is :'+ this.videoid );
  }
    ngOnDestroy() {
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
}
