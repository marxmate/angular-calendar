import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {

  @Input() title: String;

  constructor() {

  }

  ngOnInit() {
    console.log(this.title);
  }

}
