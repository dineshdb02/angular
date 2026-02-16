import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDemoformdir]',
})
export class Demoformdir {
  @Input() maxlength: any  = 10;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {
    const input  = this.el.nativeElement as HTMLInputElement;
    const allowedBtn = ['Backspace', 'Tab']
    if ((event.key >= '0' && event.key <= '9') ||
      (event.key >= 'Numpad0' && event.key <= 'Numpad9') ||
      allowedBtn.includes(event.key)) {
      return;
    } else {
      event.preventDefault()
    }

    if(input.value.length >= this.maxlength){
      event.preventDefault();
      return ;
    }
  }


}



