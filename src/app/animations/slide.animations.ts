import { trigger, style, animate, transition, state } from '@angular/animations';

export const slideInLeft = trigger('slideInLeft', [
  state('hidden', style({
    transform: 'translateX(-30px)',
    opacity: 0
  })),
  state('visible', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('hidden => visible', animate('600ms ease-out'))
]);

export const slideInRight = trigger('slideInRight', [
  state('hidden', style({
    transform: 'translateX(30px)',
    opacity: 0
  })),
  state('visible', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('hidden => visible', animate('600ms ease-out'))
]);

export const slideInUp = trigger('slideInUp', [
  state('hidden', style({
    transform: 'translateY(30px)',
    opacity: 0
  })),
  state('visible', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  transition('hidden => visible', animate('600ms ease-out'))
]);

export const slideInDown = trigger('slideInDown', [
  state('hidden', style({
    transform: 'translateY(-30px)',
    opacity: 0
  })),
  state('visible', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  transition('hidden => visible', animate('600ms ease-out'))
]);
