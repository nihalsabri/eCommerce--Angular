import { Directive , OnChanges, OnInit, SimpleChanges,ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardStyle]'
})
export class CardStyle implements  OnChanges {

  @Input() shadow1: string = '4px 1px 1px grey';
  constructor(public elm:ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
   
if (changes['shadow1']) {
      this.elm.nativeElement.style.boxShadow = this.shadow1.toString();
    }  }

  ngOnInit(): void {
this.elm.nativeElement.style.border='2px solid grey'  }


//method decorators
@HostListener ('mouseover') mouseover(){
        this.elm.nativeElement.style.boxShadow = this.shadow1.toString();

}

@HostListener ('mouseout') mouseout(){
        this.elm.nativeElement.style.boxShadow = '2px 2px 1px grey';

}

}
