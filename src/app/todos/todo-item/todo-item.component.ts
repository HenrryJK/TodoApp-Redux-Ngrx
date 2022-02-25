import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

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
  constructor() { }

  ngOnInit(): void {
    // this.todo.completado = true;
    this.chkCompletado = new FormControl(this.todo.completado);
    // aqui vamos a obligar al usuario a que ingrese por lo menos un valor o letra para eso se ha usado el Validators junto con el required
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar(){
    this.editando=true;

    setTimeout(() => {
      //el focus lo que hace es ir a la ultima posicion del texto y que este parpadeando
     //  this.txtInputFisico.nativeElement.focus();
     // el select lo que hace es seleccionar todo el texto al momento de editar
     this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion(){
    this.editando = false;
  }
}
