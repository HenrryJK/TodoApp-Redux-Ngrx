export class Todo {
  public id : number;
  public texto : string;
  public completado : boolean;

  constructor(texto:string){
    this.texto = texto;
    /// ES UNA REFERENCIA A LA HORA ACTUAL PERO EN UN SOLO NUMERO
    // esto simularia a un ID q venga d una BD algo asi.
    // this.id = new Date().getTime();

      // se cambio por el math.ramdon , para que nos genere IDS de manera aleatoria y evitar el problema de que la cantidad de arreglos no tengan el mismo id.
   this.id = Math.random();
    this.completado = false;
  }

}
