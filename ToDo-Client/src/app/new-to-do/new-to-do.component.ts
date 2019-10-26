import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from '../services/todo.service';
import { Router, NavigationEnd } from '@angular/router';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {
  addToDoForm: FormGroup;
  mySubscription: any;
  constructor(private tdServ: ToDoService,
              private router: Router,
              ) { }

  ngOnInit() {
    //ReactiveFormsModule
    this.addToDoForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    this.tdServ.addToDo(this.addToDoForm.value).subscribe(resp =>{
      console.log("AWS RDS data:")
      console.log(resp);
    })

    let todo: Todo = {
      "text": this.addToDoForm.value,
      "id": null,
      "submittedAt": new Date(),
      "completedAt": null,
      "isComplete": false
    };

    this.addToDoForm.reset();
  }


}
