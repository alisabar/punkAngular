import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
 
 bg:string='./images/background.jpg';
  constructor() {
  
   }

  ngOnInit() {
  }

}
