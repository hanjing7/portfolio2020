import { Component, OnInit } from '@angular/core';
import {Site, Sites} from '../site';
import {Side, Sides} from '../side';
import {Link, Links} from '../link';
import {Project, Projects} from '../project';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projects: Project[];
  sites: Site[];
  sides: Side[];
  links: Link[];

  constructor() { }

  ngOnInit() {
    this.projects = Projects;
    this.sites = Sites;
    this.sides = Sides;
    this.links = Links;

  }

}
