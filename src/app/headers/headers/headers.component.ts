import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  constructor(private auth:AuthService) { }

  alt = this.auth.alt

  ngOnInit(): void {
  }

}
