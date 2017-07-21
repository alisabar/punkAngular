import { Component, OnInit } from '@angular/core';

import { Video} from '../../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-aside-top',
  templateUrl: './aside-top.component.html',
  styleUrls: ['./aside-top.component.css']
})
export class AsideTopComponent implements OnInit {


top_video:Video = new Video(0,"Pitbull2",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","test5","test6","10.08.2017",4500000);
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
    videoURL(url:String){
        return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
    }
}
