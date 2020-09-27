import { Component, OnInit } from '@angular/core';
import {PDFDocumentProxy} from 'pdfjs-dist';

@Component({
  selector: 'app-pj-service-platform',
  templateUrl: './pj-service-platform.component.html',
  styleUrls: ['../bulma.css', '../pj_detail.css', './pj-service-platform.component.css']
})
export class PjServicePlatformComponent implements OnInit {

  isDisplayNonPDF = false;

  imageUrlArray:[
    'assets/img/res/gbt/pl-4.png',
    'assets/img/res/gbt/pl-3.png',
  ];
  constructor() { }

  ngOnInit() {
  }

  callBackFn(pdf: PDFDocumentProxy) {
    this.isDisplayNonPDF = true;
  }
}
