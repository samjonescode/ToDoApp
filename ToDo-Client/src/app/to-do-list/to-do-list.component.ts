import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';
import { Todo } from '../todo.model';
import { FakeToDoService } from '../no-internet-alternatives/material-playground/services/fake-todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[];
  isFetching: boolean;
  error = null;
  constructor(
    private tdServ: ToDoService,
    private fakeTdServ: FakeToDoService) { }

  ngOnInit() {
   
    //set isFetching to true to while asynchronous fetch occurs
    this.isFetching = true;

    //call the http methods of the todoService
    this.tdServ.getAllToDos().subscribe(todos =>{
      //when the response arrives, it will contain todos
      // before using them, we filter for the ones that are not completed
      // these are still yet to be finished.      
      let filteredtodos = this.tdServ.filterToDos(todos, false);
      //now we set isFetching to false to indicate the todos are fetched.
      this.isFetching = false;
      this.todos = filteredtodos.sort();
     
    }, error=>{
      //if error occurs in fetching, this error function will be called back.
      this.error=error.message; //we just save the content of the error message to this.error
    })
  }


  sortDates(timestamps: []){
     //
     let dates: any = [];
     for(let t of timestamps){
       dates.push(t);
     }

     console.log(dates.sort())
  }
}
