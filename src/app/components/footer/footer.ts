import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
INSTAGRAM: string = 'https://www.instagram.com/baking.films/';
FACEBOOK: string = 'https://www.facebook.com/p/Baking-Films-61561806923938/';

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
