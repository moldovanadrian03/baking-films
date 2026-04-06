import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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

}

