import { Component, OnInit, TemplateRef } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CotizacionI } from 'src/app/models/cotizacion';
import { AuthService } from 'src/app/service/auth-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Ofertas } from 'src/app/class/ofertas';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  modalRef?:string
  img = this.auth.img
  idCot?: string
  oferta: Ofertas = new Ofertas();
  ofertas:Ofertas[] = [];
  dataOferta:any = {};
  alt ="Logo Seguros"


  constructor(private auth: AuthService, private modalService:BsModalService, private router:Router) { }



  ngOnInit(): void {
    this.recuperaCot(this.auth.getIdUrl())
    this.onCotizacion()
  }

  recuperaCot(id: string) {
    this.auth.recuperaCotizacionId(id).subscribe(data => {
      let dataResponse: CotizacionI = data;
      console.log(dataResponse)
      this.idCot = dataResponse.id
    })
  }

  async onCotizacion(){
    let count = 0;
    let flag = false;
    // try{
    let time = setInterval(async ()=>{
      try{
        let data = await lastValueFrom(this.auth.getOfertasAll());
        if(this.ofertas.length !== data.length){
          this.ofertas = data;
        }else{
          if(flag){
            clearInterval(time)
          }
        }
        flag = true;
      }catch(e){
      }
    }, 15000)
    }
  

  
  open(data:any, content:TemplateRef<any>){
    this.dataOferta = data;
    this.modalService.show(content);
  }
  open2(content:TemplateRef<any>){
    this.modalService.show(content);
  }

  close(){
    this.modalService.hide();
    this.modalRef = "Servicio Guardado";
    // hacer logica para guardar servicio
    console.log(this.modalRef)
  }

}
