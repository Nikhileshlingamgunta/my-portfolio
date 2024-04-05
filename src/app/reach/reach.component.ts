import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    
    constructor(private http :HttpClient) {}
    
    send(){
       let bodyData = {
        "name": this.name,
        "email" :this.email,
        "subject": this.subject,
        "message": this.message
         };
         this.http.post("http://localhost:8086/user/create",bodyData,{responseType: 'text'}).subscribe((data:any)=>{
         console.log(data);
         alert("Thank You for Submitting! I'll be in touch as soon as possible");
    
         this.name='';
         this.email='';
         this.subject='';
         this.message= '';

         const headerContent = document.getElementById('header-content')
         if (headerContent){
           headerContent.scrollIntoView({behavior:'smooth',block: "start"});
         }
        });
    
    }
}
