import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tdServ: ToDoService) { }

  ngOnInit() {
  }

  deleteAll(){
    this.tdServ.deleteAll();
  }
}
