import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {Video} from '../../video/video.model';
import  {VideoListService} from '../../services/video-list.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

videos:Video[]=[];

  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {
  }

 onVideoSelected(video:Video) {
     this.videolistservice.selected_video.emit(video);
 }

}
