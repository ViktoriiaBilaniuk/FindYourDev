import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TestComponent} from './test/test.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    TestComponent,
  ],
  providers: [

  ],
})
export class DashboardModule { }
