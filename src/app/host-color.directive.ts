import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '.high-light', //a una clase
})
export class HostColorDirective {
  @HostBinding('style.color') colorKey = 'yellow'; // valor inicial
  @HostBinding('style.backgroundColor') bgColorKey = 'olive';// valor inicial

  @HostListener('mouseenter') onEnter() {
    this.colorKey = 'white';
    this.bgColorKey = 'blue';
  }

  @HostListener('mouseleave') onLeave() {
    this.colorKey = 'yellow';
    this.bgColorKey = 'red';
  }
}
