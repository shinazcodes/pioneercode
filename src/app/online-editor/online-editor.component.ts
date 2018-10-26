
import { Component, OnInit,ViewChild, AfterViewInit, Input } from '@angular/core';
import { OnlineCompilerService } from './online-compiler.service';
import { RouterModule,Route, ActivatedRoute, Params} from '@angular/router';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CoursesItem } from '../pages/data';
@Component({
  selector: 'app-online-editor',
  templateUrl: './online-editor.component.html',
  styleUrls: ['./online-editor.component.css']
})
export class OnlineEditorComponent implements OnInit, AfterViewInit {
  @Input()
  courses: CoursesItem[];
  @ViewChild('editor') editor;
  constructor(private _http: Http, private onlineCompilerService: OnlineCompilerService, private route: ActivatedRoute){}
  text = 'hello';
  languageList: any;
  selectedLanguage: any;
  data: any;
  ngOnInit() {
      this.onlineCompilerService.getLanguages().subscribe(result => {
          console.log('code run status>', result);
          this.languageList = result;
      });
      this.route.queryParams.subscribe((queryparams: Params) => { this.text = queryparams['editor']; } );
  }
  ngAfterViewInit() {
    console.log('course' +this.courses);

          this.editor.setTheme('eclipse');
          this.editor.getEditor().setOptions({
              enableBasicAutocompletion: true
          });
          this.editor.getEditor().commands.addCommand({
              name: 'showOtherCompletions',
              bindKey: 'Ctrl-.',
              exec: function (editor) {
              }
          })
      }
  submitData(text) {
      console.log('langId--->', this.selectedLanguage, text);
       this.data = {
          'language_id': this.selectedLanguage,
          'source_code': text
      }
      console.log('datat--->', this.data);
      this.onlineCompilerService.SubmitRequest(this.data);
      // console.log("datat--->", data);
      // let headers = new Headers();
      // headers.append("Content-type", "application/json")
      // this._http.post("https://api.judge0.com/submissions",data, {headers: headers})
      // .map(res=>res.json())
      // .subscribe(result => {
      //     setTimeout(() => {
      //         console.log("code submmit Response ....", result );
      //         this._http.get("https://api.judge0.com/submissions/" + result.token)
      //         .map(res=>res.json())
      //         .subscribe(result => {
      //             console.log("code run status>", result);
      //         });
      //     }, 5000);
      // });
  }
}

