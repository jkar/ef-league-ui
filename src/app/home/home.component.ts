import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    { src: 'assets/images/Argentina-National-Football-Team.jpg' },
    { src: 'assets/images/calendar-icon.jpg' },
    { src: 'assets/images/Premier-League-Logo.png' }
  ];
}
