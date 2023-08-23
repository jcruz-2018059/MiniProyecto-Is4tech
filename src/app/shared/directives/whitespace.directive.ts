import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[trimSpaces]'
})
export class WhitespaceDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {} 

  @HostListener('blur')
  onBlur() {
    const value = this.el.nativeElement.value;
    const trimmedValue = value.trim();
    this.el.nativeElement.value = trimmedValue;
    
    // Agregamos esta línea para emitir el valor recortado al componente
    this.renderer.setProperty(this.el.nativeElement, 'value', trimmedValue);
    this.el.nativeElement.dispatchEvent(new Event('input'));
  }
}
