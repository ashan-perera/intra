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
    {'id':1,'name':'CICL','description':'Navigate to CICL System','image':'../../assets/cicl.jpg'},
    {'id':3,'name':'CICL Life','description':'Navigate to CICL Life System','image':'../../assets/ciclLife.jpg'},
    {'id':2,'name':'IRCSL','description':'Navigate to IRCSL','image':'../../assets/ircsl.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'}
  ]
}
