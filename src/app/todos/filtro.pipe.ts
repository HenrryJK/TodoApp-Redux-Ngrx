import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {
     // este transform se creo y lo q hace es filtrar y retorna un nuevo arreglo , dependiendo si ese "todos" cumple la condicion de los filtros seleccionados (esto es de filtrosValidos)
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
      console.log(filtro);

    switch(filtro){

      case 'completados':
      return todos.filter(todo => todo.completado);

      case 'pendientes':
      return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }

    //console.log(value)
    //return value;
  }

}
