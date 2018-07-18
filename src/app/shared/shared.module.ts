import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { Animations } from './components/animations/animations.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CircleButtonComponent,
    Animations
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    CircleButtonComponent,
    Animations
  ],
})
export class SharedModule { }
