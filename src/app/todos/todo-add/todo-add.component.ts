import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store:Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
   }

  ngOnInit(): void {
  }

  agregar(){
    if (this.txtInput.invalid) {
      return;
    }
    // esta accion va a permitir q se guarde en el arreglo todo la informacion que enviemos en la caja de texto de la web.
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));
    //este reset para limpiar la caja de texto cada vez que se dispare la accion
    this.txtInput.reset();

    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);
  }
}
