import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatCardModule } from '@angular/material';
import {MatStepperModule, MatStep} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { CompletedComponent } from './completed/completed.component';
import { MaterialPlaygroundComponent } from './no-internet-alternatives/material-playground/material-playground.component';
import { AltToDoItemComponent } from './no-internet-alternatives/to-do-item/to-do-item.component';
import { AltAddToDoComponent } from './no-internet-alternatives/alt-add-to-do/alt-add-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoListComponent,
    NavbarComponent,
    NewToDoComponent,
    CompletedComponent,
    MaterialPlaygroundComponent,
    AltToDoItemComponent,
    AltAddToDoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
