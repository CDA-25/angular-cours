import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Premiercomposant } from './premiercomposant/premiercomposant';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Premiercomposant, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'coursAngular';
}
