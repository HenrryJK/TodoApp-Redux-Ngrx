import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  // para desactivar el foco de edicion y que no se quede alli si no que me permita salir de la edicion.
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado : FormControl;
  txtInput : FormControl;
  editando: boolean = false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.todo.completado = true;
    this.chkCompletado = new FormControl(this.todo.completado);
    // aqui vamos a obligar al usuario a que ingrese por lo menos un valor o letra para eso se ha usado el Validators junto con el required
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // Suscribcion a cualquier cambio que haga el check : el check que se muestra en nuestra vista (web).
    this.chkCompletado.valueChanges.subscribe( valor =>{
        // console.log(valor);
        this.store.dispatch(actions.toggle({id:this.todo.id}));
    });
  }

  editar(){
    this.editando=true;
    /// esto es para evitar q se pierda la data por si al momento de editar borramos toda la caja de texto y cuando se vuelve a editar no se pierde la imformacion
    this.txtInput.setValue(this.todo.texto);
    //este setTimeout es para q el marcador o el punto este tildando ya que el focus no se muestra y todo esto sucede tan rapido que no se esta mostando el elemento cuando ya se esta llamando el focus
    setTimeout(() => {
      //el focus lo que hace es ir a la ultima posicion del texto y que este parpadeando
     //  this.txtInputFisico.nativeElement.focus();
     // el select lo que hace es seleccionar todo el texto al momento de editar
     this.txtInputFisico.nativeElement.select();
    }, 1);

  }


  terminarEdicion(){
    this.editando = false;
// aplicamos una condicion por si al momento de editar una tarea , si borramos todo y esta vacia . Deberia haber una condicion q impida q se dispare la accion si esta vacio.
// validacion q nos quiere decir que necesita por lo menos un valor o letra para q se pueda guardar los cambios o enviar la accion
    if (this.txtInput.invalid) {
      return;
    }
    // validacion por si el usuario entro en la edicion de una tarea y no hizo ningun cambio , evita q no dispare ninguna accion.
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    /// aqui disparamos esta action editar donde llamamos los dos campos o objetos que seria el id y el texto
    this.store.dispatch(
      actions.editar({
        id:this.todo.id,
        texto:this.txtInput.value
      })
    );
  }
}
