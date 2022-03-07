import { createAction, props  } from "@ngrx/store";

// un export de un tipo "personalizado" q nos ayuda a poner un seguro para asegurar q estos tipos sean permitidos siempre
export type filtrosValidos = 'todos'|'completados'|'pendientes';

// creamos una accion
export const setFiltro = createAction(
  '[Filtro] Set Filtro',
    props<{filtro:filtrosValidos}>()
  );
