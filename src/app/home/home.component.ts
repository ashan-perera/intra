import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usefulLinks = [
    {
      'id': 1,
      'name': 'CICL',
      'description': 'Navigate to CICL System',
      'url': 'http://172.20.10.10:8080/CoopLife/',
      'image': '../../assets/cicl.jpg'
    },
    { 
      'id': 2,
      'name': 'IRCSL',
      'description': 'Navigate to IRCSL',
      'url': 'http://172.20.10.10:8080/CoopLife/',
      'image': '../../assets/ircsl.jpg'
    }
  ]

  usefulLinks2 = [
    { 
      'id': 1,
      'name': 'CICL Life',
      'description': 'Navigate to CICL Life System',
      'url': 'http://172.20.10.10:8080/CoopLife/',
      'image': '../../assets/ciclLife.jpg'
    },
    {
      'id': 2,
      'name': 'Learn Reactjs',
      'description': 'Navigate to CICL Life System',
      'url': 'https://html.com/attributes/a-target/',
      'image': '../../assets/reactjs.jpg'
    }
  ]

}
