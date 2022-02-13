import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

// el estaod inicial va a trabajar con un arreglo de la clase Todo que es un modelo (una clase) por lo tanto se le pone "[]" porque de paso esta vacio
export const estadoInicial:Todo[] = [];

const _todoReducer = createReducer(
  estadoInicial,
  // ...state , lo que hace es extraer y separar  cada uno de los items y regresarlos de manera independiente
  // lo que hace este arreglo [...state, new Todo(texto)] es para retornar un nuevo arreglo , porque siempre tenemos que retornar un nuevo estado , para prevenir la mutacion de ese objeto
  on(crear, (state ,{texto}) => [...state, new Todo(texto)]),
);

export function todoReducer(state, action) {
  return _todoReducer(state , action);
}
