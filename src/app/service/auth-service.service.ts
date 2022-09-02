import { Injectable } from '@angular/core';
import { LoginI } from '../models/login';
import { LoginRespI } from '../models/login-resp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { FormularioI } from '../models/formulario';
import { FormularioRespI } from '../models/formulario-resp';
import { CotizacionI } from '../models/cotizacion';
import { Ofertas } from '../class/ofertas';
import { Comunas } from '../class/comunas';
import { ModelosI } from '../models/modelos';
import { MarcasI } from '../models/marcas';
import { yearsI } from '../models/years';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  img = "assets/LogoTTA.png"
  alt = "LogoTransatuauto"
  private url: string = 'https://cotizador-staging.comparaonline.com/octopus-prime'
  private idCotizacion: string = ''
  private Form: any = []
  private comunas:any
  private marca:any




  constructor(private http: HttpClient) {
  }

  //Login
  getAuth(): Observable<LoginRespI> {
    let user: LoginI = { username: 'transatuauto', password: 'TCM9wpj3mxg9qkn-abf' }
    return this.http.post<LoginRespI>(`${this.url}/auth/login`, user)
  }

  //Obtener Token
  getToken() {
    return localStorage.getItem('accessToken')
  }
  //headers
  headers() {
    let token = this.getToken();
    let headers = {
      Authorization: `Bearer ${token}`
    }
    return headers;
  }
  //Envia formulario
  envioForm(form: FormularioI): Observable<FormularioRespI> {
    let headers = this.headers();
    return this.http.post<FormularioRespI>(`${this.url}/quotes`, form, { headers })
  }


  //Se guarda el IdCotizacion al enviar formulario
  setIdColtizacion(valor: string) {
    this.idCotizacion = valor
  }
  //Se obtiene IdCotizacion
  getIdUrl() {
    return this.idCotizacion;
  }
  recuperaCotizacionId(id: string): Observable<CotizacionI> {
    let headers = this.headers()
    let direccion = this.url + '/quotes/' + id;
    return this.http.get<CotizacionI>(direccion, { headers })
  }

  //consulta las ofertas para IdCotizacion - EVENTO NO PARA
  cotizacionId(): Observable<Ofertas> {
    let id = this.getIdUrl()
    let headers = this.headers()
    let direccion = this.url + '/quotes/' + id;
    return this.http.get<Ofertas>(direccion,{ headers })
  }

  //obtiene las ofertas ya cargadas
  getOfertasAll(): Observable<Ofertas[]> {
    let id = this.getIdUrl()
    let headers = this.headers()
    const URL = this.url + '/offers/' + id + '/all';
    return this.http.get<Ofertas[]>(URL,{ headers })
  }

  Comunas():Observable<Comunas[]>{
    let id = this.getIdUrl()
    let headers = this.headers()
    const URL = this.url + '/geo/communes';
    return this.http.get<Comunas[]>(URL,{ headers })}
  
  setComuna(valor: string) {
    this.idCotizacion = valor
  }
  
  //Se obtiene IdCotizacion
  getComuna() {
    return this.idCotizacion;
  }

  getAnios():Observable<yearsI[]>{
    let id = this.getIdUrl()
    let headers = this.headers()
    const URL = this.url + '/cars/years';
    return this.http.get<yearsI[]>(URL,{ headers })}

  // modelos():Observable<ModelosI[]>{
  //     let id = 9
  //     let headers = this.headers()
  //     const URL =`${this.url}/cars/brands/${id}/models`;
  //     return this.http.get<ModelosI[]>(URL,{ headers })}

  marcas():Observable<MarcasI>{
        let direccion = `${this.url}/cars/brands`
        let headers = this.headers()
        return this.http.get<MarcasI>(direccion,{headers}) 

      }
      setMarca(valor: string) {
        this.marca = valor
      }
      
      //Se obtiene IdCotizacion
      getMarca() {
        return this.marca;
      }

      modelos(id:number):Observable<ModelosI[]>{
        let headers = this.headers()
        const URL =`${this.url}/cars/brands/`+id+'/models';
        return this.http.get<ModelosI[]>(URL,{ headers })}


  
 }






