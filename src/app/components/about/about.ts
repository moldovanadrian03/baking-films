import { Component } from '@angular/core';
import { slideInLeft, slideInRight } from '../../animations/slide.animations';
import { CARDS_SECTION, scrollToElementById } from '../../utils';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    slideInLeft,
    slideInRight
  ]
})
export class About {
  scrollToById(element: string): void {
      scrollToElementById(element);
  }

  CARDS_SECTION = CARDS_SECTION;
}
