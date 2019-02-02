import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterContext: string): any {
    if (!items) {
      return [];
    }
    if (!filterContext) {
      return items;
    }
    filterContext = filterContext.toLowerCase();
    return items.filter((itm: any) => itm.Transmission.toLowerCase().includes(filterContext) ||
      itm.Fuel_Type.toLowerCase().includes(filterContext) || itm.Car_Type.toLowerCase().includes(filterContext));
  }

}
