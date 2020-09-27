import { Component, OnInit } from '@angular/core';
import {Galleries, Gallery} from '../gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleries: Gallery[];

  tag = 'all';

  filterTag(tag: string){
    this.tag = tag;
  }

  constructor() {
    this.galleries = Galleries;
  }

  getPath(name: string) {
    return `assets/img/gallery/${name}`;
  }

  ngOnInit() {
  }
}
