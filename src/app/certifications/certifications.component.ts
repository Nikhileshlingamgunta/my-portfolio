import { Component } from '@angular/core';



@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
 isCollapsed = true;
 toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  console.log('isCollapsed:', this.isCollapsed); // Check if the method is called
}
}
