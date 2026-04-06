import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('baking-films');
}
