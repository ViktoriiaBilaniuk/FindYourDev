import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './test/test.component';
import { TitleComponent } from './dashboard/home/title/title.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    TestComponent,
    TitleComponent,
    HomeComponent,

  ],
  providers: [

  ],
})
export class DashboardModule { }
