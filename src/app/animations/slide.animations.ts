import { trigger, style, animate, transition } from '@angular/animations';

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({
      transform: 'translateX(-30px)',
      opacity: 0
    }),
    animate('600ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({
      transform: 'translateX(30px)',
      opacity: 0
    }),
    animate('600ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({
      transform: 'translateY(30px)',
      opacity: 0
    }),
    animate('600ms ease-out', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ])
]);