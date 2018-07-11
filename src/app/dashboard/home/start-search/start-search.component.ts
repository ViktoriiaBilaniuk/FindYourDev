import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fyd-start-search',
  templateUrl: './start-search.component.html',
  styleUrls: ['./start-search.component.scss']
})
export class StartSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClick() {
    this.router.navigate(['/auth']);
  }

}
