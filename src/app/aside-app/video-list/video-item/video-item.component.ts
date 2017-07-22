import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Video} from '../../../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

@Input() video:Video;
@Output() itemSelected=new EventEmitter<void>();

onSelected(){
    this.itemSelected.emit();
}

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.embedded.toString());
}

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
