import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { yearsI } from 'src/app/models/years';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>()

  anios?:yearsI[];
  anio:yearsI[] = []
  dataOferta:any = []

  com:string=''
  seleccionado:string=''

  

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.Obtener()

  }
  Obtener() {
    let data = this.auth.getAnios().subscribe(data => {
        let dataResponse:yearsI[]= data;
        console.log(data)
        this.dataOferta = data;
        console.log(this.dataOferta.years)
        let array = this.anio
        for (let a = 0; a < array.length; a++) {
          let array1 = array[a]
        }
        if(this.dataOferta.id!)
        console.log(this.com)
      }
    )
  } 
  
  guardar(event:any) {
    let valor = event;
    this.com =valor;
    this.newItemEvent.emit(valor)
    console.log(valor)}

  
 
}



