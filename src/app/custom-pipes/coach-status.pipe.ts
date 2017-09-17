import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert the status index to the status text.
 * Takes the status index.
 * Usage:
 *   status index | coachStatus
*/
@Pipe({name: 'coachStatus'})
export class CoachStatusPipe implements PipeTransform {
  transform(index: number): string {
    var statuses = ['不正常', '正常'];
    return statuses[index];
  }
}