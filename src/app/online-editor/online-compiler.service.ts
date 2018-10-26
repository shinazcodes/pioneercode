import { Injectable } from '@angular/core';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class OnlineCompilerService {

  constructor(private _http: Http) { }
  codeResult: any;
    getLanguages() {
        return this._http.get(' https://api.judge0.com/languages')
        .map(res => res.json());
        // return this.LANGUAGES;
    }
    SubmitRequest(data) {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        this._http.post('https://api.judge0.com/submissions', data, {headers: headers})
        .map(res => res.json())
        .subscribe(result => {
            setTimeout(() => {
                console.log('code submmit Response ....', result );
                this._http.get('https://api.judge0.com/submissions/' + result.token)
                .map(res => res.json())
                .subscribe(result => {
                    console.log('code run status>', result);
                    this.codeResult = result.stdout;
                });
            }, 9000);
        });
    }

}