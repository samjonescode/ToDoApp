import { Component, OnInit } from '@angular/core';
import { FakeToDoService } from '../material-playground/services/fake-todo.service';
import { Todo } from 'src/app/todo.model';
import { TodoSubjectService } from '../material-playground/services/todo-subject.service';

@Component({
  selector: 'app-alt-add-to-do',
  templateUrl: './alt-add-to-do.component.html',
  styleUrls: ['./alt-add-to-do.component.css']
})
export class AltAddToDoComponent implements OnInit {

  newTodoText: any = '';
  constructor(
    private fakeTdServ: FakeToDoService,
    // private todoSubjectService: TodoSubjectService
    ) { }

  ngOnInit() {
  }

  addToDo(){
    if (this.newTodoText == ''){
      alert("Cannot submit empty to do")
      return;
    }
    let todo = new Todo(this.newTodoText, 133, false, new Date());
    this.fakeTdServ.todos.push(todo);
    this.newTodoText = '';

    //Ignore ************************************************************************************************* 

    //same idea, except we broadcast the new array to any listening components.
    // this.todoSubjectService.todosSubj.next(this.fakeTdServ.todos)

  }
}
