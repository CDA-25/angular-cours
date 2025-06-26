import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  logo = 'https://aupiffr.files.wordpress.com/2024/03/logo.jpg'
  nav1 = 'Acceuil'
  nav2 = 'Team'
  nav3 = 'Contacts'
}
