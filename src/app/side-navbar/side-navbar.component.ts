import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  menuChoices: { title: string, link: string} [] = [
    { title: 'home', link: '/' },
    { title: 'teams', link: '/teams' },
    { title: 'leagues', link: '/leagues' },
    { title: 'program', link: '/program'}
  ];

}
