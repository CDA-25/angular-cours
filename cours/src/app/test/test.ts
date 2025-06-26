//pour crée ce dossier test et tous les fichiers qui vont avec, il faut faire ng g component test

import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  //en gros la je déclare la varible title qui est égale à coucou, et ça je l'appelle dans le html
  title = "coucou"
}
