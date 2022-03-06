import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ){
 
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos = [
  new Todo(1, 'Learn coding', false, new Date()),
  new Todo(2, 'Become an expert', false, new Date()),
  new Todo(2, 'Visit Switzerland', false, new Date())
]

  constructor() { }

  ngOnInit(): void {
  }

}
