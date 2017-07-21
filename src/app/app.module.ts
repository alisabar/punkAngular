import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AsideAppComponent} from './aside-app/aside-app.component';
import { AppComponent } from './app.component';

import {AsideBottomComponent} from './aside-app/aside-bottom/aside-bottom.component';
import {AsideTopComponent} from './aside-app/aside-top/aside-top.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import { NavComponent } from './nav/nav.component';
import { VideoComponent } from './video/video.component';

import { AsideTopListComponent } from './aside-top-list/aside-top-list.component';
import { VideoTopComponent } from './video-top/video-top.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { VideoPlayComponent } from './video-play/video-play.component';

import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
AsideAppComponent,
 AsideTopComponent,
    WrapperComponent,
    NavComponent,
    VideoComponent,
   AsideBottomComponent,
    AsideTopListComponent,
    VideoTopComponent,
    VideoPlayComponent,
    AsideBottomComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
