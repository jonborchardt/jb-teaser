import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewed'
})
export class ReviewedPipe implements PipeTransform {
  transform(value: boolean): string {
    return value === true ? 'Yes' : 'No';
  }

}
