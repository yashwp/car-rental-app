import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  bsValue = moment.now();
  searchObj = {
    location: null,
    date: null
  };
  config = {showWeekNumbers: false, dateInputFormat: 'DD/MM/YY'};
  showError = false;

  constructor() {
  }

  ngOnInit() {
  }

  applySearch() {
    if (!this.searchObj.location || !this.searchObj.date) {
      this.showError = true;
      return;
    }
    this.searchObj.date = moment(this.searchObj.date).format('ddd');
    this.searchObj.location = this.searchObj.location.toLowerCase();
    this.onSearch.emit(this.searchObj);
    this.initializeObj();
  }

  initializeObj() {
    this.searchObj = {
      location: null,
      date: null
    };
  }

}
