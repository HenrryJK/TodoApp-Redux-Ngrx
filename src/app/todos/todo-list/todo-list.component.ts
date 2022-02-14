import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

// imports de clases existentes
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]=[];
  // implementacion del store
  constructor(private store:Store<AppState>) {

   }

  ngOnInit(): void {
    // realizamos un suscribcion , donde se recive el arreglo todo - que recibira los todos del susbcribe
    this.store.select('todos')
    .subscribe(todos => this.todos = todos)
  }

}
