import {EventEmitter,Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

import{Video} from '../video/video.model';

@Injectable()
export class VideoListService{

private videos:Video[]=[];
    selected_video=new EventEmitter<Video>();

private url:string="https://movies-ws-project.herokuapp.com/";

    constructor(private http: Http){}

    getVideosByBand(band){
       this.http.get('$(this.url)/get_Movies_by_band/$band')
            .subscribe(
                (response:Response) => {
               this.videos=response.json();
               return this.videos;
                });
    }

}
