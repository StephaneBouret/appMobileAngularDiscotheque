import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSurvol]'
})
export class SurvolDirective {

  @Input() appSurvol: string;
  defaultColor = 'indigo';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseenter() {
    const color = this.appSurvol || this.defaultColor;
    this.renderer.setStyle(this.el.nativeElement, 'border' , '3px solid ' + color);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.renderer.setStyle(this.el.nativeElement, 'border' , 'none');
  }

}
