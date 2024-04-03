import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
	images = [1, 7, 3, 2].map((n) => './assets/Images/carousel' + n + '.JPG');
}
