import { Component, OnInit } from '@angular/core';
import {TitlePlayer} from '../title-player';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  titlePlayer: TitlePlayer = new TitlePlayer( ['Coming soon!'], 150, 500);

  constructor() { }

  ngOnInit() {
    this.titlePlayer.run();
  }

}
