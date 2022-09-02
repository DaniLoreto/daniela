import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelosI } from 'src/app/models/modelos';
import { AuthService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter<string>()

modelos?: ModelosI;
modelo: ModelosI[] = []
dataOferta:ModelosI[] = [];

com:string=''
seleccionado:string=''
aa?:string;




  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.Obtener()
  }

Obtener() {
  this.auth.modelos(49).subscribe(data => {
      this.dataOferta = data;
      // console.log(dataResponse[0].id)
      // this.dataOferta = data;
      // console.log(this.dataOferta[0].attributes.baseName)
      // let array = this.modelo
      // for (let a = 0; a < array.length; a++) {
      //   let array1 = array[a]
      // }
      // if(this.dataOferta.id!)
      // console.log(this.com)
    }
  )
} 

guardarId(id:any){
  console.log('daniela')
this.dataOferta= id[0].id
  console.log(id)


}

name: string = '';

setValue() {
  this.name = 'Nancy';
}

} 

// @Output() newItemEvent = new EventEmitter<string>()

// comunas: Comunas = new Comunas();
// comuna: Comunas[] = []
// dataOferta: any = [];

// com:string=''
// seleccionado:string=''






// constructor(private auth: AuthService, private router: Router, private activeRuter: ActivatedRoute) { }

// ngOnInit(): void {
//   this.Obtener()
// }



// Obtener() {
//   let data = this.auth.Comunas().subscribe(data => {
//     if (this.comuna.length !== data.length) {
//       this.comuna = data;
//       this.dataOferta = data;
//       let array = this.comuna
//       for (let a = 0; a < array.length; a++) {
//         let array1 = array[a]
//       }
//       if(this.dataOferta.id!)
//         this.auth.setComuna(this.com)
//       console.log(this.com)
//     }
//   }
//   )
// }

// guardar(event:any) {
//   let valor = event;
//   this.com =valor;
//   this.newItemEvent.emit(valor)
//   console.log(valor)}

  

// }