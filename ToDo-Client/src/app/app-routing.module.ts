import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { CompletedComponent } from './completed/completed.component';
import { MaterialPlaygroundComponent } from './no-internet-alternatives/material-playground/material-playground.component';


const routes: Routes = [{path:'todolist', component:ToDoListComponent},
                        {path: 'addtodo', component: NewToDoComponent},
                        {path: 'completedlist', component: CompletedComponent},
                        {path: 'faketodo', component: MaterialPlaygroundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
