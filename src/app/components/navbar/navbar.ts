import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ABOUT_SECTION, CARDS_SECTION, CAROUSEL_SECTION, FOOTER_SECTION, scrollToElementById } from '../../utils';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    NgIf
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, AfterViewInit{
  isSidenavOpened: boolean = false;
  isMobileView: boolean = false;
  resizeObserver: ResizeObserver | null = null;
  activeSection: string = '';

  constructor() {}

  ngOnInit(): void {
    this.updateIsMobileView();
    this.resizeObserver = new ResizeObserver(() => {
      this.updateIsMobileView();
    });
    this.resizeObserver.observe(document.body);
  }

   ngAfterViewInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
  const sections = [
    this.ABOUT_SECTION,
    this.CARDS_SECTION,
    this.CAROUSEL_SECTION,
    this.FOOTER_SECTION
  ];

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  //detectare footer
  if (scrollPosition >= pageHeight - 50) {
    if (this.activeSection !== this.FOOTER_SECTION) {
      this.activeSection = this.FOOTER_SECTION;
    }
    return;
  }

  const offset = window.innerHeight * 0.2;

  for (let id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;

    const rect = el.getBoundingClientRect();

    if (rect.top <= offset && rect.bottom >= offset) {
      if (this.activeSection !== id) {
        this.activeSection = id;
      }
      break;
    }
  }
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
  CAROUSEL_SECTION = CAROUSEL_SECTION;
  FOOTER_SECTION = FOOTER_SECTION;
}

