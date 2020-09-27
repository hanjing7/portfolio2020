import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

declare function dockAnimationController(): any;

@Component({
  selector: 'app-nav-dock',
  templateUrl: './nav-dock.component.html',
  styleUrls: ['./nav-dock.component.css']
})
export class NavDockComponent implements OnInit {

  deviceInfo = null;

  constructor(private deviceService: DeviceDetectorService) {

  }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.debug(this.deviceInfo);

    if (!this.deviceService.isMobile()){
      dockAnimationController();
    }
  }
}
