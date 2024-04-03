import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.css'
})
export class ScrollToTopButtonComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if user has scrolled down more than 200px
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
