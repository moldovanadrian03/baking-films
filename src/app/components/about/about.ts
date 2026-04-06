import { Component } from '@angular/core';
import { slideInLeft, slideInRight } from '../../animations/slide.animations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    slideInLeft,
    slideInRight
  ]
})
export class About {}
