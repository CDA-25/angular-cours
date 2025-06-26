//création d'un composant avec ng g composant "nom"

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  //déclarer la variable ici qui sera utiliser dans le header.html
  title = "je suis un header"
}
