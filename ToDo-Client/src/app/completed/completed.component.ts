import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  todos: Array<any>;
  error = null;
  isFetching: boolean = false;
  constructor(
    private tdServ: ToDoService) { }

  ngOnInit() {
    this.isFetching=true;
    this.tdServ.getAllToDos().subscribe(todos =>{
      let filteredTodos = this.tdServ.filterToDos(todos, true);
      this.isFetching = false;

      this.todos = filteredTodos.sort((b): number=>{
        console.log(b.completedAt)
        
        return b.completedAt;
      });
    }, error =>{
      this.error = error.message;
    })
  }

  sortToDos(todos){
    return this.todos.sort(todos.submittedAt)
  }

}
