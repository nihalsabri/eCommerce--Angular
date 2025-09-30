import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNum'
})
export class CardNumPipe implements PipeTransform {

  transform(value: string): string {
  return value.replace(/(\d{4})/g, '$1-').slice(0, 19);
  }

}
