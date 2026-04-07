import { Component } from '@angular/core';
import { Card } from '../../interfaces/card.model';
import { NgFor } from '@angular/common';
import { cardAnimations } from '../../animations/cards.animations';
import { slideInLeft, slideInRight } from '../../animations/slide.animations';

@Component({
  selector: 'app-cards-section',
  imports: [
    NgFor,
  ],
  templateUrl: './cards-section.html',
  styleUrl: './cards-section.scss',
  animations: [
    cardAnimations,
    slideInLeft,
    slideInRight
  ],
})
export class CardsSection {

  cards: Card[] = [
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
    },
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 2',
      description: 'This is a description for card 2.',
    },
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 3',
      description: 'This is a description for card 3.',
    },
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 4',
      description: 'This is a description for card 4.',
    },
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 5',
      description: 'This is a description for card 5.',
    },
    {
      image: 'assets/logo_square.png',
      title: 'Card Title 6',
      description: 'This is a description for card 6.',
    },
  ];
}
