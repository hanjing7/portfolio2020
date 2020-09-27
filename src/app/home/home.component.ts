import { Component, OnInit } from '@angular/core';
import {Project, Projects, Projects2} from '../project';
import {Link, Links} from '../link';
import {TitlePlayer} from '../title-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  projects2: Project[];
  links: Link[];
  titlePlayer: TitlePlayer = new TitlePlayer( ['designer.', 'coder.', 'illustrator.', 'thinker!'], 100, 700);

  constructor() { }

  imagePathAsBackground(img: string) {
    return `url(assets/img/pj/${img}.png)`;
  }

  ngOnInit() {
    this.titlePlayer.run();
    this.projects = Projects;
    this.projects2 = Projects2;
    this.links = Links;
  }

}
