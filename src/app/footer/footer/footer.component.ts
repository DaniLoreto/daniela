import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private auth:AuthService) { }
  alt = this.auth.alt
  
  ngOnInit(): void {
  }

}
