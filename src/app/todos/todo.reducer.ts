import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear , editar, toggle } from './todo.actions';

// el estado inicial va a trabajar con un arreglo de la clase Todo que es un modelo (una clase) por lo tanto se le pone "[]" porque de paso esta vacio
// export const estadoInicial:Todo[] = [];

export const estadoInicial:Todo[] = [
  new Todo('Arreglar la antena de Comunicaciones'),
  new Todo('Realizar intervencion en ViseGrad'),
  new Todo('Realizar evacuacion en New Alejandria'),
  new Todo('Ir a Pillar of Authun.'),
];
const _todoReducer = createReducer(
  estadoInicial,
  // ...state , lo que hace es extraer y separar  cada uno de los items y regresarlos de manera independiente
  // lo que hace este arreglo [...state, new Todo(texto)] es para retornar un nuevo arreglo , porque siempre tenemos que retornar un nuevo estado , para prevenir la mutacion de ese objeto
  on(crear, (state ,{texto}) => [...state, new Todo(texto)]),
  // se usa aqui funcion en llaves porque queremos que nos regrese el state (estado). y el map lo que hace es regresarnos ese nuevo estado (state) o arreglo q contienen esos resultados.
  on(toggle, (state ,{id}) => {
      return state.map(todo =>{
        if (todo.id === id){
          return{
            // este ...todo lo que hace es extraer todo los "todos" osea tareas. Pero a las demas tareas los deja , solo te extraer o trae la tarea que este completado.
            ...todo,
         completado: !todo.completado
       }
     }else{
       // caso contrario de no completarlo , te retorna la tarea , el objeto no cambia se queda tal como estaba.
       return todo;
     }

      });
  }),

  on(editar, (state ,{id , texto}) => {
    return state.map(todo =>{
      if (todo.id === id){
        return{
          ...todo,
          texto:texto
     }
   }else{
     // caso contrario de no completarlo , te retorna la tarea , el objeto no cambia se queda tal como estaba.
     return todo;
   }

    });
}),
);






export function todoReducer(state, action) {
  return _todoReducer(state , action);
}
