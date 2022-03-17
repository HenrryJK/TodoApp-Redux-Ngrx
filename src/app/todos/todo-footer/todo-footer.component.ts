import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos ='todos';

  //filtro una variable q contiene un arreglo de todos los arreglos o filtros existentes
  // te permite ademas te permite poder colocar cual de tus filtros debe ir primero y se aplica en la vista
  filtros : actions.filtrosValidos[] = ['todos','completados','pendientes'];
  // importamos el store
  constructor(private store: Store<AppState>) {

   }

  ngOnInit(): void {
    // no subscribimos al store donde se hace un select a los filtros q se han declarado en el Appstate
    this.store.select('filtro').subscribe(filtro =>
       // console.log(filtro);
        this.filtroActual = filtro
    );
  }
    cambiarFiltro(filtro: actions.filtrosValidos){
       // console.log(filtro);
       this.store.dispatch(actions.setFiltro({filtro:filtro}));
    }
}
