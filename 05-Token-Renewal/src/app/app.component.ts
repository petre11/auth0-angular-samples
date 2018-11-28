import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    auth.scheduleRenewal();
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }
  }
}
