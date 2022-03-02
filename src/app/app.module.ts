import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Formulario Reactivos
import { ReactiveFormsModule } from "@angular/forms";
// NGRX
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//----- ///
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    // como hace una conexion con un modulo independiente
   StoreModule.forRoot({ todos: todoReducer }),
   StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
