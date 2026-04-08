import { Component } from '@angular/core';
import { Card } from '../../interfaces/card.model';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { cardAnimations } from '../../animations/cards.animations';
import { slideInLeft, slideInRight } from '../../animations/slide.animations';
import { CARDS } from '../../utils';

@Component({
  selector: 'app-cards-section',
  imports: [
    NgFor,
    NgIf,
    SlicePipe
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

  cards = CARDS;

  selectedCard: Card | null = null;

  openModal(card: Card): void {
    this.selectedCard = card;
    console.log('Selected Card:', this.selectedCard);
  }

  closeModal(): void {
    this.selectedCard = null;
  }
}
