import { Component } from '@angular/core';
import { slideInDown, slideInLeft, slideInRight, slideInUp } from '../../animations/slide.animations';
import { CARDS_SECTION, scrollToElementById, CAROUSEL_SECTION } from '../../utils';
import { AnimateOnScroll } from "../../animate-on-scroll";

@Component({
  selector: 'app-about',
  imports: [AnimateOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    slideInLeft,
    slideInRight,
    slideInDown
  ]
})
export class About {
  isVisible: boolean = false;

  scrollToById(element: string): void {
      scrollToElementById(element);
  }

  CARDS_SECTION = CARDS_SECTION;
  CAROUSEL_SECTION = CAROUSEL_SECTION;
}
