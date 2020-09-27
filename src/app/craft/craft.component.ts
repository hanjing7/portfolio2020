import { Component, OnInit } from '@angular/core';
import {Craft, Crafts} from '../craft';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})
export class CraftComponent implements OnInit {

  crafts: Craft[];

  constructor() {
    this.crafts = Crafts;
  }

  getPath(name: string) {
    return `assets/img/craft/${name}.jpg`;
  }

  ngOnInit() {
  }

}
