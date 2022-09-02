import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
    let cotizacion = this.activeRouter.snapshot.paramMap.get('id')
    console.log(cotizacion)
  }

  

}
