import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, TodoPageComponent],
  imports: [
    CommonModule
  ],
  // aqui declaramos un export para que el elemento de TodoPage o la pagina principal se pueda mostrar , por eso se exportan
  exports:[
    TodoPageComponent
  ]
})
export class TodoModule { }