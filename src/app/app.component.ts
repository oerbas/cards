import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      img: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      img: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture'
    },
    {
      title: 'Mountain Biking',
      img: 'assets/biking.jpeg',
      username: 'biking12',
      content: 'Biking of the mountain'
    }
  ];
}
