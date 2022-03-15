import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8082/users/${username}/todos`)
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`http://localhost:8082/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`http://localhost:8082/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo: Todo){
    return this.http.put<Todo>(`http://localhost:8082/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo: Todo){
    return this.http.post<Todo>(`http://localhost:8082/users/${username}/todos`, todo)
  }

}
