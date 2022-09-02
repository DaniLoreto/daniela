import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { ErrorI } from 'src/app/models/error';
import { LoginI } from 'src/app/models/login';
import { LoginRespI } from 'src/app/models/login-resp';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorStatus: boolean = false
  errorMsj?: any


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.Login()
    // this.checkLocal()

  }
  //Se conecta, confirma que se encuentre cargado y guarda el Token en el localStorage
  async Login() {
    let data = await lastValueFrom(this.auth.getAuth())
    if (data.username = "transatuauto") {
      try {
        this.auth.getAuth().subscribe(data => {
          let dataResponse:LoginRespI = data;
          if (dataResponse.username == 'transatuauto') {
            localStorage.setItem("accessToken", dataResponse.accessToken)
            localStorage.getItem("accessToken");
          }else{
            console.log("revisa el login")

          }
        })
      } catch (error) {
        console.log("revisa el login")

      


      }
    } else {
      console.log("revisa el login")



    }
  }

  //una vez logueado redirecciona a formulario
  checkLocal() {
    if (localStorage.getItem('accessToken'))
      this.router.navigate(['formulario'])
  }




}
