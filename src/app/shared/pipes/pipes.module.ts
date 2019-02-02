import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FilterPipe} from './filter.pipe';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
  declarations: [OrderByPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe, FilterPipe]
})
export class PipesModule {
}
