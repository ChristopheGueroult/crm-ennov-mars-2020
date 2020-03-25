import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    // console.log(value);
    // console.log(args.length);
    if (value) {
      if (args.length > 0) {
        return value.totalTtc();
      }
      return value.totalHt();
    }
    return null;
  }

}
