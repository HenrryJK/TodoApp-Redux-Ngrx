import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

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

  filtroActual: filtrosValidos;
  // implementacion del store
  constructor(private store:Store<AppState>) {

   }

  ngOnInit(): void {
    // realizamos un suscribcion , donde se recive el arreglo todo - que recibira los todos del susbcribe
   // this.store.select('todos').subscribe(todos => this.todos = todos);
    // cada vez que se reciba un cambio , voy a estar subscrito y se actualizara la propiedad "todos"
    // esta subscribe es para que el state q maneja la imormacion de todas la tareas tanto como pendientes como completadas o no , se puede ver reflejados mientras cambiamos de vistas o bueno mediante los filtros ('Completados' ,'Todos' ,'Pendientes')

     //  hacemos una desestructuracion del state
     // this.store.subscribe(state =>{
      this.store.subscribe(({todos,filtro}) =>{
       this.todos = todos;
       //este argumento se le puede usar para poder mandarselo como argumento al pipe
       this.filtroActual = filtro;
    });
  }

}
