import { Component } from '@angular/core';
import { INSTAGRAM, FACEBOOK, scrollToElementById, ABOUT_SECTION, CARDS_SECTION, FOOTER_SECTION, CAROUSEL_SECTION } from '../../utils';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  scrollToById(element: string): void {
    scrollToElementById(element);
  }

  ABOUT_SECTION = ABOUT_SECTION;
  CARDS_SECTION = CARDS_SECTION;
  CAROUSEL_SECTION = CAROUSEL_SECTION;
  FOOTER_SECTION = FOOTER_SECTION;
  FACEBOOK = FACEBOOK;
  INSTAGRAM = INSTAGRAM;
}
