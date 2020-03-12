import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";


export class Todo{
constructor( public id: number,
             public description: string,
             public done: boolean,
             public targetDate: Date){

}
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  message:String
   // todos= [new Todo(1,"fan",false,new Date()),
   // new Todo(2,"wang",false,new Date()),
   // new Todo(3,"yun",false,new Date())]
  constructor(private todoService:TodoDataService,
              private route:Router) { }

  ngOnInit(): void {
     this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAlltodo('wang').subscribe(
      response =>{
        console.log(response);
        this.todos = response
      }

    )
  }


  deleteTodo(id){
   this.todoService.deleteTodo('wang',id).subscribe(
     response=>{
       console.log(response);
       this.message = `Delete of Todo ${id} Successful`
       this.refreshTodos();
     }
   )
  }
  updateTodo(id){
    console.log(`update${id}`)
    this.route.navigate(['todos',id])
  }
  createTodo(){
    this.route.navigate(['todos',-1])

  }

}
