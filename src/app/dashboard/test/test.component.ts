import { Component, OnInit } from '@angular/core';
import {LinkedinService} from '../../core/services/linkedin.service';
import {FacebookService} from '../../core/services/facebook.service';


@Component({
  selector: 'fyd-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor (
    private linkedinService: LinkedinService,
    private facebookService: FacebookService) {
  }


  ngOnInit() {


  }

}
