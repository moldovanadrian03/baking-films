import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScroll implements AfterViewInit {
  @Output() visible = new EventEmitter<void>();
  @Input() threshold: number = 0.5;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.visible.emit();
        observer.disconnect();
      }
    }, { threshold: [this.threshold] });
    observer.observe(this.el.nativeElement);
  }
}
