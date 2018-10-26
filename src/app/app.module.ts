import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AceEditorModule } from 'ng2-ace-editor';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { OnlineEditorComponent } from './online-editor/online-editor.component';
import { OnlineCompilerService } from './online-editor/online-compiler.service';

import { PlayerComponent } from './player/player.component';
import { Routes, RouterModule } from '@angular/router';
import { GetjsonService } from './getjson.service';


const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'course', component: HeaderComponent,
  children: [
    { path: ':id', component: LeftMenuComponent,
  children: [
  { path: ':topics', component: PlayerComponent}
            ] },
  // { path: '**', redirectTo: 'course'}
  // { path: 'java', component: JavaComponent,
  // children: [
  // { path: ':id', component: PlayerComponent}
  //           ] },
  // { path: 'c', component: CComponent,
  // children: [
  //   { path: ':id', component: PlayerComponent}
  //             ] },
  // { path: 'python', component: PythonComponent,
  // children: [
  //   { path: ':id', component: PlayerComponent}
  //             ] },
]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    OnlineEditorComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AceEditorModule,
    RouterModule.forRoot(routes),
    YoutubePlayerModule
  ],
  providers: [OnlineCompilerService, GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
