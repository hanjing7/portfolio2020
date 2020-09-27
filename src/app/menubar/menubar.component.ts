import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  systemTime = '';
  systemDate = '';

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.systemTime = date.toLocaleTimeString('en-US', { weekday: 'long'});
    this.systemDate = date.toLocaleDateString();
  }

}
