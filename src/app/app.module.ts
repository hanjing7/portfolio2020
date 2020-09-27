import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDockComponent } from './nav-dock/nav-dock.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CodeComponent } from './code/code.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { PjFundAnalyzerComponent } from './projects/pj-fund-analyzer/pj-fund-analyzer.component';
import { PjBrokercheckComponent } from './projects/pj-brokercheck/pj-brokercheck.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { PjCrdComponent } from './projects/pj-crd/pj-crd.component';
import { PjOfacComponent } from './projects/pj-ofac/pj-ofac.component';
import { PjFinproGatewayComponent } from './projects/pj-finpro-gateway/pj-finpro-gateway.component';
import { PjServicePlatformComponent } from './projects/pj-service-platform/pj-service-platform.component';
import { PjBytonWebsiteComponent } from './projects/pj-byton-website/pj-byton-website.component';
import { PjSedComponent } from './projects/pj-sed/pj-sed.component';
import { CraftComponent } from './craft/craft.component';
import {FilterPipe} from './gallery/filter.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {SlideshowModule} from 'ng-simple-slideshow';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { CvComponent } from './cv/cv.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavDockComponent,
    HomeComponent,
    GalleryComponent,
    CodeComponent,
    MenubarComponent,
    TimelineComponent,
    AboutComponent,
    PjFundAnalyzerComponent,
    PjBrokercheckComponent,
    PjCrdComponent,
    PjOfacComponent,
    PjFinproGatewayComponent,
    PjServicePlatformComponent,
    PjBytonWebsiteComponent,
    PjSedComponent,
    CraftComponent,
    FilterPipe,
    CvComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    DeviceDetectorModule.forRoot(),
    PdfViewerModule,
    SlideshowModule,
    // PerfectScrollbarModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
