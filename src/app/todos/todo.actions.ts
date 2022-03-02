import { createAction, props } from '@ngrx/store';

export const crear  = createAction(
  '[TODO] Crear todo',
   props<{texto:string}>()
  );

  // lo que hace el toggle es cambiar el estado de esa tarea , si esta completado a falso y si estaba (no completado) de falso a true
  export const toggle  = createAction(
    '[TODO] Toggle todo',
     props<{id:number}>()
    );





