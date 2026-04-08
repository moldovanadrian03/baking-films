import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { CardsSection } from "./components/cards-section/cards-section";
import { FullScreenCarousel } from "./components/full-screen-carousel/full-screen-carousel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Footer, CardsSection, FullScreenCarousel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('baking-films');

  ABOUT_SECTION = 'about-section';
  CARDS_SECTION = 'cards-section';
  CAROUSEL_SECTION = 'carousel-section';
  FOOTER_SECTION = 'footer-section';
}
