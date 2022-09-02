import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Comunas } from 'src/app/class/comunas';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html',
  styleUrls: ['./comunas.component.scss']
})
export class ComunasComponent implements OnInit {



  @Output() newItemEvent = new EventEmitter<string>()

  comunas: Comunas = new Comunas();
  comuna: Comunas[] = []
  dataOferta: any = [];

  com:string=''
  seleccionado:string=''






  constructor(private auth: AuthService, private router: Router, private activeRuter: ActivatedRoute) { }

  ngOnInit(): void {
    this.Obtener()
  }

  

  Obtener() {
    let data = this.auth.Comunas().subscribe(data => {
      if (this.comuna.length !== data.length) {
        this.comuna = data;
        this.dataOferta = data;
        let array = this.comuna
        for (let a = 0; a < array.length; a++) {
          let array1 = array[a]
        }
        if(this.dataOferta.id!)
          this.auth.setComuna(this.com)
        console.log(this.com)
      }
    }
    )
  }

  guardar(event:any) {
    let valor = event;
    this.com =valor;
    this.newItemEvent.emit(valor)
    console.log(valor)}

    

}
  // }






