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
// este es un arreglo q llama a la clase modelo Todo , pero inicia estando vacio [0].
  todos: Todo[]=[];
  // implementacion del store
  constructor(private store:Store<AppState>) {

   }

  ngOnInit(): void {
    // realizamos un suscribcion , donde se recive el arreglo todo - que recibira los todos del susbcribe
    this.store.select('todos')
    .subscribe(todos => this.todos = todos);
    // cada vez que se reciba un cambio , voy a estar subscrito y se actualizara la propiedad "todos"
  }

}
