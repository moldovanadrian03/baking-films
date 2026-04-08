import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-screen-carousel',
  imports: [
    NgFor
  ],
  templateUrl: './full-screen-carousel.html',
  styleUrl: './full-screen-carousel.scss',
})
export class FullScreenCarousel {
  images: string[] = [
    'assets/logo_square.png',
    'assets/logo_square.png',
    'assets/logo_square.png',
    'assets/logo_square.png',
    'assets/logo_square.png',
    'assets/logo_square.png',
  ];
}
