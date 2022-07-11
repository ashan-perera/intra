import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

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
      'id': 3,
      'name': 'CICL Life',
      'description': 'Navigate to CICL Life System',
      'url': 'http://172.20.10.10:8080/CoopLife/',
      'image': '../../assets/ciclLife.jpg'
    },
    { 
      'id': 2,
      'name': 'IRCSL',
      'description': 'Navigate to IRCSL',
      'url': 'http://172.20.10.10:8080/CoopLife/',
      'image': '../../assets/ircsl.jpg'
    },
    {
      'id': 4,
      'name': 'Learn Reactjs',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'url': 'https://html.com/attributes/a-target/',
      'image': '../../assets/reactjs.jpg'
    }
  ]
}
