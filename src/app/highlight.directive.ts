import { Directive , ElementRef , HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  



  constructor(private elem:ElementRef) { this.elem.nativeElement.style.color='lightblue'; }

  // private quoteColor(action:string){
  //   this.elem.nativeElement.style.color=action;
  

}
