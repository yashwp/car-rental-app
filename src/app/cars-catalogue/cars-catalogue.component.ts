import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car} from '../model/car';
import {CommonService} from '../shared/services/common.service';

@Component({
  selector: 'app-cars-catalogue',
  templateUrl: './cars-catalogue.component.html',
  styleUrls: ['./cars-catalogue.component.scss']
})
export class CarsCatalogueComponent implements OnInit, OnChanges {
  @Input() searchData: any;
  cars: Array<Car>;
  filteredCars: Array<Car> = [];
  filterText = '';
  direction = 1;
  isReverse = false;

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.commonService.getCars().subscribe((res: Car[]) => {
      if (res) {
        this.cars = [...res];
        this.filteredCars = [...res];
      }
    }, (err: any) => console.log('Error is: ', err));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.searchData) {
      return;
    }
    if (this.cars && this.searchData && Object.keys(this.searchData).length) {
      this.searchCars(this.searchData);
    }
  }

  searchCars(data: any) {
    this.filteredCars = this.cars.filter((car: Car) => data.location === car.Location.toLowerCase());
  }

  sortByPrice() {
    this.isReverse = !this.isReverse;
    this.direction = this.isReverse ? 1 : -1;
  }

}
