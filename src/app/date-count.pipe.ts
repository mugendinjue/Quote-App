import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {

      let today:Date = new Date(); 
      let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      var dateDifference = Math.abs(value - todayWithoutTime) 
      const secondsInDay = 86400; 
      var dateDifferenceSeconds = dateDifference*0.001;
      var dateCounter = dateDifferenceSeconds/secondsInDay;

      console.log (dateCounter);

      if (dateCounter >= 1 ){
        return dateCounter;
      }else{
        return 0;
      }

    return null;
  }

}
