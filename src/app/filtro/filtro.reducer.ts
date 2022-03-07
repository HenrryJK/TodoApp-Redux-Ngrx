import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

// el estado inicial no recibira un numero sino un string que contiene los filtros por los cuales se mostraran cada vez que presionemos en diferentes vistas.
export const initialState: filtrosValidos = 'todos';
// en este Reducer se llama al arreglo que es el filtro que contiene un string por lo cual no es necesario hacer una mutacion ni nada de eso. Porque el string es considerado un primitivo
const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, {filtro}) => filtro),

);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
