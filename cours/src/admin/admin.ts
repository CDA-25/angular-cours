import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  //faire l'import ici pour l'enfant d'admin
  imports: [RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
