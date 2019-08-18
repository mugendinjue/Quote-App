import { Directive , ElementRef , HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  numberOfClicks = 0;

  @HostListener ('click') onclick(){
    this.quoteColor(" #764ba2")
  }



  constructor(private elem:ElementRef) { }

  private quoteColor(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
