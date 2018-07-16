import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fyd-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {
  @Input() click;

  constructor() { }

  ngOnInit() {
  }

}
