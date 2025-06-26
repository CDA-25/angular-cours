import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from "./test/test";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cours';
}
