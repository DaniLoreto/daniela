import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MarcasI } from 'src/app/models/marcas';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>()

  marca?:MarcasI
  marcas:MarcasI [] = []
  dataOferta: any
  data:any
  com:string=''
  seleccionado:string=''

  constructor(private auth: AuthService, private router: Router, private activeRuter: ActivatedRoute) { }

  ngOnInit(): void {
    this.Obtener()
  }


  Obtener() {
    let data = this.auth.marcas().subscribe(async data => {
      let dataResponse:MarcasI = data
      console.log(dataResponse)
      //   this.dataOferta = data;
      // this.auth.setMarca(dataResponse.id)
      // this.data = await lastValueFrom(this.auth.modelos(49));
      //   console.log(this.dataOferta)
      //   let array = this.marcas
      //   for (let a = 0; a < array.length; a++) {
      //     let array1 = array[a]
      //   }
      //   if(this.dataOferta.id!)
      //   console.log(this.com)
      //   }
  })
  }

  guardar(event:any) {
    let valor = event;
    this.com =valor;
    this.newItemEvent.emit(valor)
    console.log(valor)}

    

}
  // }






