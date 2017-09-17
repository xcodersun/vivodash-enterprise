import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert the tilte index to the title text.
 * Takes the title index.
 * Usage:
 *   title index | coachTitle
*/
@Pipe({name: 'coachTitle'})
export class CoachTitlePipe implements PipeTransform {
  transform(index: number): string {
    var titles = ['N/A', '院长', '教练', '助教'];
    return titles[index];
  }
}