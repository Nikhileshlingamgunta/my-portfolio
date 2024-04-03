import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public router: Router){}

  onHome(){
    this.router.navigate(['../home']);
  }
  onBlog(){
    const blogContent = document.getElementById('blog-content')
    if (blogContent){
      blogContent.scrollIntoView({behavior:'smooth',block: "start"});
    }
    //this.router.navigate(['../about']);
  }
  onPortofolio(){
    const PortfolioContent = document.getElementById('portfolio-content')
    if (PortfolioContent){
      PortfolioContent.scrollIntoView({behavior:'smooth',block: "start"});
    }
   //this.router.navigate(['../portfolio'])
  }
  onReach(){
    const reachContent = document.getElementById('reach-content')
    if(reachContent){
      reachContent.scrollIntoView({behavior:"smooth", block: "start"});
    }
    //this.router.navigate(['../reach']);
  }
}
