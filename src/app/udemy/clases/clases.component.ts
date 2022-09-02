import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cambiarInterpolacion()
  }

  //DataBinding:
  //Event Binding
  event = "aprendiendo event binding"
  cambiarEvent(){
    this.event = "hemos cambiado el text, gracias por presionar"
  }

  //interpolacion
  titulo = 'TTA'

  cambiarInterpolacion(){
    //funcion para que a los 3 segundos se cambie el mensaje
    setInterval(()=>this.titulo = 'TransaTuauto', 3000);
   }

  getSuma(n1:number,n2:number){
    return n1 + n2;

  }

  //ngIF
  listado:any [] =[
    {nombre:'daniela', prom: 0},
    {nombre:'loreto', prom:1},
    {nombre:'alvarado', prom:2},

  ]
  mostrar =true

  toogle():void{
    this.mostrar = !this.mostrar
  }



  
}
