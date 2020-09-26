import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value
            .toLowerCase()
            .split(" ")
            .map((val: string) => val.charAt(0).toUpperCase() + val.substring(1))
            .join(" ")
            .split("-")
            .map((val: string) => val.charAt(0).toUpperCase() + val.substring(1))
            .join("-");
  }

}
