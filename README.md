# Angular cours

créer un composant : ng generate component Name : il génère automatiquement les fichiers : https://angular.dev/cli/generate

exemple :

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
selector: 'app-root', // => balise htm qui est nommé comme ça dans le html
imports: [RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected title = 'merveille'; //protected securise mais non obligatoire

mavariable = 'bonjour aussi à vous' // variable ajouté avec {{ }} ligne 232 de app.html

alert() {
alert('coucou la belle');
}

// appelle la fonction ensuite dans ton html : (click)="alert()"

}
