import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './test/test.component';
import { TitleComponent } from './home/title/title.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { StartSearchComponent } from './home/start-search/start-search.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    TestComponent,
    TitleComponent,
    HomeComponent,
    HowItWorksComponent,
    StartSearchComponent,

  ],
  providers: [

  ],
})
export class DashboardModule { }
