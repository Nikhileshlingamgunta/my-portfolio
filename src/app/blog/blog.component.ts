import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      title: 'My Journey in becoming a Full Stack Developer...',
      excerpt: 'My path to Full Stack Development began with curiosity, leading to mastery in HTML, CSS, JavaScript, ReactJS, AngularJS, and Node.js. Through hands-on projects, I honed my skills, deploying my first full-stack application. This journey was more than learning to code; it was a lesson in continuous learning and tech innovation.',
      thumbnailUrl: './assets/Images/blog1.JPG'
    },
    {
      title: 'Learning Angular 17',
      excerpt: "Exploring Angular 17, I journeyed through learning TypeScript, components, and services, advancing my skills with each project. This venture wasn't merely about grasping a framework but was an embrace of web development's dynamic evolution, culminating in my proficiency in crafting dynamic, scalable web applications attuned to modern demands.",
      thumbnailUrl: './assets/Images/blog2.JPG'
    },
    {
      title: 'How it Started? Temple Management System ',
      excerpt: "'Temple Management System' catapulted us into the ReactJS universe. It was our sandbox for innovation—a project born from the zeal to craft something new and dive deep into technologies we'd only theorized about. This endeavor wasn't just coding; it was our maiden voyage into ReactJS and NodeJS, turning curiosity into creation.",
      thumbnailUrl: './assets/Images/blog3.JPG'
    },
    {
      title: 'Design Decode Develop',
      excerpt: '"Design Decode Develop" marks my journey from creative design to analytical problem-solving and innovative solution development. It symbolizes the fusion of art and technology, highlighting my process of transforming abstract ideas into tangible realities, seamlessly bridging the gap between imaginative design and practical application.',
      thumbnailUrl: './assets/Images/blog4.JPG'
    },
    {
      title: 'Paths to learn React framework',
      excerpt: "The journey 'Paths to Learn React Framework' kicked off with the 'Temple Management System' project, transforming ideas into reality. It offered an immersive exploration into React, from components to hooks, emphasizing not just application development but mastering React's potential to craft dynamic, user-focused solutions.",
      thumbnailUrl: './assets/Images/blog5.JPG'
    },
    {
      title: 'Learning NodeJS & Go Services',
      excerpt: "The 'Temple Management System' project, leveraging NodeJS and Go alongside Qdine, was a venture into integrating modern backend technologies to streamline religious site operations. This endeavor was not merely technical learning but a fusion of tradition with innovation, demonstrating the impactful blend of NodeJS's flexibility and Go's speed.",
      thumbnailUrl: './assets/Images/blog6.JPG'
    }
 
    // Add more posts as needed
  ];
}
