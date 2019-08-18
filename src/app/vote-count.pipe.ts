import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteCount'
})
export class VoteCountPipe implements PipeTransform {

  transform(value: any): number {

    console.log (value);



    return null;
  }

}
