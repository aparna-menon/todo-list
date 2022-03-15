import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
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

todos: Todo[] = []

  message!: string;
// new Todo(1, 'Learn coding', false, new Date()),
// new Todo(2, 'Become an expert', false, new Date()),
// new Todo(2, 'Visit Switzerland', false, new Date())
  // new Todo(1, 'Learn coding', false, new Date()),
  // new Todo(2, 'Become an expert', false, new Date()),
  // new Todo(2, 'Visit Switzerland', false, new Date())


  constructor(
    private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodo()
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos('aparna').subscribe(
      response => {
        this.todos = response})
  }

  deleteTodo(id: any){
    this.todoService.deleteTodo('aparna', id). subscribe(
      response => {
        this.message = `Deletion of Todo ${id} successful!`
        this.refreshTodo()
      }
    )
  }

  updateTodo(id: any){
    // console.log('updating todo')
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
