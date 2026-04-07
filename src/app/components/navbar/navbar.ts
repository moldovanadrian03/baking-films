import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ABOUT_SECTION, CARDS_SECTION, FOOTER_SECTION, scrollToElementById } from '../../utils';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit{
  isSidenavOpened: boolean = false;
  isMobileView: boolean = false;
  resizeObserver: ResizeObserver | null = null;

  constructor() {}

  ngOnInit(): void {
    this.updateIsMobileView();
    this.resizeObserver = new ResizeObserver(() => {
      this.updateIsMobileView();
    });
    this.resizeObserver.observe(document.body);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updateIsMobileView();
  }

  private updateIsMobileView() {
    const screenWidth = window.innerWidth;
    this.isMobileView = screenWidth <= 768;
  }
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  scrollToById(element: string): void {
    scrollToElementById(element);
  }

  ABOUT_SECTION = ABOUT_SECTION;
  CARDS_SECTION = CARDS_SECTION;
  FOOTER_SECTION = FOOTER_SECTION;
}

