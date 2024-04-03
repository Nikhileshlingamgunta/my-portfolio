import { Component } from '@angular/core';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrl: './reach.component.css'
})
export class ReachComponent {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Process form submission here
    console.log(this.contact);
  }

}
