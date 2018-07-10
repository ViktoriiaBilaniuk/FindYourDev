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
/*    this.linkedinService.authorization()
      .subscribe(data => {
        console.log(data);
      });*/
    /*this.linkedinService.getUsers()
      .subscribe(data => {
        console.log(data);
      });*/

/*    this.facebookService.getUsers()
      .subscribe(data => {
        console.log(data);
      });*/
  }

}
