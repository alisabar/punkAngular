import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{VideoPlayComponent} from './video-play/video-play.component';

import{AsideTopListComponent} from './aside-top-list/aside-top-list.component';

const appRoutes: Routes=[
{path: '', redirectTo: '/video-play', pathMatch:'full'},
{path:'video-play', component: VideoPlayComponent },
{path:'aside-top-list', component: AsideTopListComponent }

];
console.log('app routes loading...');
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
    exports: [RouterModule]
    
})

export class AppRoutingModule{

}