export class Todo {
  public id : number;
  public texto : string;
  public completado : boolean;

  constructor(texto:string){
    this.texto = texto;
    /// ES UNA REFERENCIA A LA HORA ACTUAL PERO EN UN SOLO NUMERO
    this.id = new Date().getTime();
    this.completado = false;
  }

}
