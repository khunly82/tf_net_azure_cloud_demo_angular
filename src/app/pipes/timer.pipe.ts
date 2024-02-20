import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    const h = Math.floor(value / 3600000 % 24).toString().padStart(2, '0');
    const m = Math.floor(value / 60000 % 60).toString().padStart(2, '0');
    const s = Math.floor(value / 1000 % 60).toString().padStart(2, '0');
    const ms = (value % 1000).toString().padStart(3, '0');
    return `${h}:${m}:${s}:${ms}`;
  }

}
