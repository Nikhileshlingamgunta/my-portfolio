import { Component, HostListener, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  animationPlayed: boolean;
  currentPercentage: number; // To track animation progress
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef;
  skills: Skill[] = [
    { name: 'Coding', percentage: 85, animationPlayed: false, currentPercentage: 0 },
    { name: 'Design Thinking', percentage: 95, animationPlayed: false, currentPercentage: 0 },
    { name: 'Leadership', percentage: 90, animationPlayed: false, currentPercentage: 0 },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.skillsContainer) return;
    const componentPosition = this.skillsContainer.nativeElement.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition >= componentPosition) {
      this.skills.forEach((skill, index) => {
        if (!skill.animationPlayed) {
          this.animateSkill(skill, index);
        }
      });
    }
  }
  constructor(private cdr: ChangeDetectorRef) {}

  animateSkill(skill: Skill, index: number): void {
    skill.animationPlayed = true; // Prevent re-animating the same skill
    const interval = setInterval(() => {
      skill.currentPercentage++;
      if (skill.currentPercentage > skill.percentage) {
        clearInterval(interval);
        skill.currentPercentage = skill.percentage; // Ensures it stops at the exact target value
        this.cdr.detectChanges(); // Manually trigger change detection
        setTimeout(() => {
          skill.animationPlayed = true; // Delay the flag setting to allow bounce animation
          const skillElements = this.skillsContainer.nativeElement.querySelectorAll('.progress-circle');
          skillElements[index].classList.add('completed');
          this.skills = [...this.skills]; // Update to trigger the bounce animation
        }, 250); // Delay time for the bounce animation
      } else {
        this.skills = [...this.skills];
        this.cdr.detectChanges(); // Manually trigger change detection

      }
    }, 20); 
  }

  getCircleBackground(percentage: number): any {
    return {
      background: `conic-gradient(blue ${percentage * 3.6}deg, lightgray ${percentage * 3.6}deg, lightgray)`
    };
  }
  
}
