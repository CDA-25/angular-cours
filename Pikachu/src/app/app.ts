import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Pikachu';
}
