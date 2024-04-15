import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // animations: [
  //   trigger('counterAnimation', [
  //     transition(':increment', animate('1s ease-out', style({ opacity: 1 }))),
  //   ]),
  // ],
})
export class HomeComponent implements OnInit {
  isCollapsed  = true;

  downloadCV() {
    // Path to your file in the assets folder
    const link = document.createElement('a');
    link.href = 'assets/CV2.pdf';
    link.download = 'CV2.pdf';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    
    // For Firefox it is necessary to delay revoking the ObjectURL
    setTimeout(() => {
      window.URL.revokeObjectURL(link.href);
    }, 100);
  }

  stats = [
    { count: 0, text: 'Years of Experience', target: 2 },
    { count: 0, text: 'Working Projects', target: 10 },
    { count: 0, text: 'Events Organized', target: 5 }
  ];

  ngOnInit() {
    this.stats.forEach(stat => {
      this.animateValue(stat, stat.target, 2000);
    });
  }
  toggleAndAnimate() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.stats.forEach((stat, index) => {
        setTimeout(() => {
          this.animateValue(stat, stat.target, 2000);
        }, index * 500); // Adding delay to start animation for each card separately
      });
    } else {
      // Reset the stats count when collapsing the content
      this.stats.forEach(stat => stat.count = 0);
    }
  }
  animateValue(stat: any, target: number, duration: number) {
    const start = 0;
    const increment = target > start ? 1 : -1;
    const range = target - start;
    const stepTime = Math.abs(Math.floor(duration / (range / increment)));
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      stat.count = current;
      if (current === target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
