import { Component, OnInit , Input} from '@angular/core';
import {VideoComponent} from '../video/video.component'
@Component({
  selector: 'app-video-top',
  templateUrl: './video-top.component.html',
  styleUrls: ['./video-top.component.css']
})
export class VideoTopComponent implements OnInit {
@Input() video: VideoComponent;
  constructor() { }

  ngOnInit() {
  }

}
