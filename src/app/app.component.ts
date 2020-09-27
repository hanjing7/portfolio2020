import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

declare function cursorAnimationController(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JingPortfolio19';
  constructor(private spinner: NgxSpinnerService) {};
  ngOnInit() {
    cursorAnimationController();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
