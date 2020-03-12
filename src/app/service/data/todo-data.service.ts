import { Injectable } from '@angular/core';
import {HelloWorldBean} from "./welcome-data.service";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../todos/todos.component";
//import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retrieveAlltodo(username){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todo`);
  }
  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/user/${username}/todo/${id}`);
  }
  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo){
    return this.http.put(`http://localhost:8080/user/${username}/todos/${id}`,todo);
  }
  addTodo(username,todo){
    return this.http.post(`http://localhost:8080/user/${username}/todos`,todo);
  }
}
