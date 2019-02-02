import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
  declarations: [OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe]
})
export class PipesModule {
}
