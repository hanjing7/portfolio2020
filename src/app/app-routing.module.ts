import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CodeComponent} from './code/code.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TimelineComponent} from './timeline/timeline.component';
import {AboutComponent} from './about/about.component';
import {CvComponent} from './cv/cv.component';
import {PjFundAnalyzerComponent} from './projects/pj-fund-analyzer/pj-fund-analyzer.component';
import {PjBrokercheckComponent} from './projects/pj-brokercheck/pj-brokercheck.component';
import {PjCrdComponent} from './projects/pj-crd/pj-crd.component';
import {PjServicePlatformComponent} from './projects/pj-service-platform/pj-service-platform.component';
import {PjBytonWebsiteComponent} from './projects/pj-byton-website/pj-byton-website.component';
import {PjOfacComponent} from './projects/pj-ofac/pj-ofac.component';
import {PjFinproGatewayComponent} from './projects/pj-finpro-gateway/pj-finpro-gateway.component';
import {CraftComponent} from './craft/craft.component';
import {PjSedComponent} from './projects/pj-sed/pj-sed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'craft', component: CraftComponent },
  { path: 'code', component: CodeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'fund-analyzer', component: PjFundAnalyzerComponent},
  { path: 'CRD', component: PjCrdComponent},
  { path: 'service-platform', component: PjServicePlatformComponent},
  { path: 'BytonWeb', component: PjBytonWebsiteComponent},
  { path: 'ofac', component: PjOfacComponent},
  { path: 'FinPro', component: PjFinproGatewayComponent},
  { path: 'brokercheck', component: PjBrokercheckComponent},
  { path: 'BytonSED', component: PjSedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
