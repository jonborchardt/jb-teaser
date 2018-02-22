import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<any>, propertyName: string) {
    return arr.sort((a, b) => a[propertyName] < b[propertyName] ? -1 : 1);
  }

}
