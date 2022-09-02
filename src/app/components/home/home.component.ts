import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Technologies';
  techs = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React JS', 'Angular'];
  imageURL = 'https://picsum.photos/200/300';
  twoWayData = '2 way data binding';
  constructor() {}

  ngOnInit(): void {}

  abc() {
    alert('Event Binding Works!!');
  }
}
