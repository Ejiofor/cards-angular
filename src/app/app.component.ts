import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts  = [
    {title:'Neat tree',
     imageUrl: 'assets/tree.jpeg',
     username: 'nature',
     content: 'I saw this neat tree today'},
    
     {title:'Mountain Biking',
     imageUrl: 'assets/biking.jpeg',
     username: 'biking1222',
     content: 'biking is great today'},

     {title:'Snowy mountain',
     imageUrl: 'assets/mountain.jpeg',
     username: 'mountain lover',
     content: 'Here is a picture of a snow maountain'}
  ];
}
