import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('baking-films');
}
