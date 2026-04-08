import { Component } from '@angular/core';
import { Card } from '../../interfaces/card.model';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { cardAnimations } from '../../animations/cards.animations';
import { slideInLeft, slideInRight } from '../../animations/slide.animations';

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

  cards: Card[] = [
    {
      image: 'assets/IrinaElenaProducer.jpg',
      title: 'Irina Elena, Producer',
      description: 'Irina Enea este o producătoare creativă din România, cu un interes puternic pentru filmele dedicate copiilor și tinerilor, precum și pentru integrarea audience design-ului încă din primele etape de dezvoltare. Este, de asemenea, membră a European Children’s Film Association (ECFA), o rețea internațională importantă care reunește cineaști, producători, distribuitori și festivaluri din peste 40 de țări, contribuind activ la modelarea viitorului cinematografiei pentru publicul tânăr și susținând creșterea vizibilității, accesului și sprijinului pentru acest sector.',
    },
    {
      image: 'assets/RazvanMarinescuDirector.jpeg',
      title: 'Razvan Marinescu, Director',
      description: 'RĂZVAN MARINESCU este regizor, scenarist, actor și producător din România, cu 20 de ani de experiență în film și televiziune. A scris și regizat mai multe scurtmetraje premiate și dezvoltă în prezent două scenarii de lungmetraj (Pericolși Părfect). Cunoștințele sale relevante atât în fața, cât și în spatele camerei – ca actor în celebra serie Cu un pas înainte (Un Paso Adelante) și ca director de casting în agenții de top – reprezintă un atu important în înțelegerea întregului proces de realizare a unui film. Pe lângă viziunea sa artistică ca regizor, abilitățile excelente de comunicare și management de echipă contribuie la transformarea fiecărui film al lui Răzvan într-o producție impecabilă. De asemenea, a regizat și produs numeroase videoclipuri muzicale, filme corporate și spoturi publicitare. Siel by Tohani a fost premiat cu Prix du meilleur film, secțiunea corporate, în 2018, la FIFDVV, Franța.',
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
  ];

  selectedCard: Card | null = null;

  openModal(card: Card): void {
    this.selectedCard = card;
    console.log('Selected Card:', this.selectedCard);
  }

  closeModal() {
    this.selectedCard = null;
  }
}
