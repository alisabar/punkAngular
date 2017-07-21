import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    pressed:boolean;
  constructor() { }

  ngOnInit() {
      this.pressed=false;
  }

onPressed(){
    this.pressed=!this.pressed;
}
}
