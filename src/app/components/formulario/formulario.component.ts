import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioI } from 'src/app/models/formulario';
import { FormularioRespI } from 'src/app/models/formulario-resp';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorI } from 'src/app/models/error';
import { lastValueFrom } from 'rxjs';
import { CotizacionI } from 'src/app/models/cotizacion';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MarcasI } from 'src/app/models/marcas';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  img = this.auth.img
  alt = this.auth.alt
  errorStatus: boolean = false
  errorMsj: any
  data: any
  comuna:any
  traecomuna:any
  traemarca:string =''
  holo:number = 697



  cotizacionForm = new FormGroup({
    modelId: new FormControl(),
    brandId: new FormControl(),
    year: new FormControl(),
    carOwner: new FormControl(),
    nationalId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthdate: new FormControl(),
    countyId: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    contactType: new FormControl(),
    carUseType: new FormControl(),
    businessName: new FormControl()
  })

  constructor(private auth: AuthService, private router: Router, private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.rellenar()

  }
  addItemComunas(e:string){
    this.comuna= e
    if(this.comuna)
    this.auth.setComuna(this.comuna)
    console.log(this.auth.getComuna())
    console.log(this.comuna)
  }

  addItemMarcas(e:string){
    this.traemarca= e
    if(this.traemarca)
    this.auth.setMarca(this.traemarca)
    console.log(this.auth.getMarca())
    console.log(this.traemarca)
  }

  obtenerComuna(){
    this.auth.getComuna()
  }

  async onCotizacion(form: FormularioI) {
    this.auth.envioForm(form).subscribe(async data => {
      let dataResponse: FormularioRespI = data;
      this.auth.setIdColtizacion(dataResponse.id)
      this.data = await lastValueFrom(this.auth.cotizacionId());
      if (data.id == dataResponse.id) {
      } else {
        console.log('danie')
        this.errorStatus=true;
        this.errorMsj = dataResponse.message
        
      }
      this.router.navigate(['ofertas'])
    })
  }

  rellenar() {

    this.cotizacionForm.controls['modelId'].setValue(this.holo);
    this.cotizacionForm.controls['brandId'].setValue("49");
    this.cotizacionForm.controls['year'].setValue("2021");
    this.cotizacionForm.controls['carOwner'].setValue("0");
    this.cotizacionForm.controls['nationalId'].setValue("16.367.327-4");
    this.cotizacionForm.controls['firstName'].setValue("Nicolas");
    this.cotizacionForm.controls['lastName'].setValue("Mayorga");
    this.cotizacionForm.controls['birthdate'].setValue("");
    this.cotizacionForm.controls['countyId'].setValue('9');
    this.cotizacionForm.controls['phone'].setValue("+56999999999");
    this.cotizacionForm.controls['email'].setValue("dalvarado@transatuauto.cl");
    this.cotizacionForm.controls['contactType'].setValue("3");
    this.cotizacionForm.controls['carUseType'].setValue("private");
    this.cotizacionForm.controls['businessName'].setValue("automotor");
  }


  // obtenerComunas(){
  //   this.auth.getComunas().subscribe(data=>{ 
  //     let dataResponse:ComunasI = data
  //     console.log(data)
  //   })
  // }


}
