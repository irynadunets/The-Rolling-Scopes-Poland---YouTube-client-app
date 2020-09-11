import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') public color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnChanges(): void {
    let y: Date = new Date();
    y.setMonth(y.getMonth() - 6);
    let m: Date = new Date();
    m.setMonth(m.getMonth() - 1);
    let w: Date = new Date();
    w.setDate(w.getDate() - 7);
    let p: Date = new Date(this.color);
    if (y > p) {
       this.renderer2.setStyle(this.elementRef.nativeElement, 'background', 'red');
     } else if (m.toISOString() > p.toISOString()) {
       this.renderer2.setStyle(this.elementRef.nativeElement, 'background', 'yellow');
    } else if (w.toISOString() > p.toISOString()) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background', 'green');
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background', 'blue');
    }
  }

  }
