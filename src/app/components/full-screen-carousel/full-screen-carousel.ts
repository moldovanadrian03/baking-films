import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MOVIES1, MOVIES2 } from '../../utils';
import { Movie } from '../../interfaces/movie.model';

@Component({
  selector: 'app-full-screen-carousel',
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './full-screen-carousel.html',
  styleUrl: './full-screen-carousel.scss',
})
export class FullScreenCarousel {

  movies1 = MOVIES1;
  movies2 = MOVIES2;

  selectedMovie: any = null;

  openModal(movie: Movie): void {
      this.selectedMovie = movie;
      console.log('Selected Movie:', this.selectedMovie);
    }

    closeModal(): void {
      this.selectedMovie = null;
    }
}
