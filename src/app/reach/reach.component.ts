import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrl: './reach.component.css'
})
export class ReachComponent {
    name:string ="";
    email:string ="";
    subject:string ="";
    message:string ="";
    
    // constructor(private http :HttpClient) {}
    
    send(){
       const bodyData = {
        "name": this.name,
        "email" :this.email,
        "subject": this.subject,
        "message": this.message
         };
        // this.http.post("https://my-portfolio-backend-yypl.onrender.com/user/create",bodyData,{responseType: 'text'}).subscribe((data:any)=>{
        //   console.log(data);
        //  alert("Thank You for Submitting! I'll be in touch as soon as possible");
    
        //  this.name='';
        //  this.email='';
        //  this.subject='';
        //  this.message= '';

        //  const headerContent = document.getElementById('header-content')
        //  if (headerContent){
        //    headerContent.scrollIntoView({behavior:'smooth',block: "start"});
        //  }
        // });

        emailjs.send('service_opohf6w','template_m7k796s',bodyData,'mId91uupJ1XDwcVId')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your message has been sent!');

          // Clear the form fields after success
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';

        }, (error) => {
          console.error('Failed to send email:', error);
          alert('There was an error sending your message.');
        });

    }
}
