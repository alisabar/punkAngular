import { Component, OnInit } from '@angular/core';
import { Video} from '../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


main_video:Video = new Video(0,"Pitbull",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","tes5","test6","10.08.2017",500000);
  constructor(private sanitizer: DomSanitizer) {
   }

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.main_video.embedded.toString());
}

  ngOnInit() {
  }

}
