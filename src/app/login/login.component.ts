import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  message: string;
  email: string;
  pw: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage() {
    this.message = this.authService.isLog ? "Connecté" : "Non connecté" ;
  }


  login(values: any) {
    this.message = "Connexion en cours...";
    this.authService.login(values.email, values.pw).then(res => {
      this.authService.isLog = true;
      this.setMessage();
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/disques';
      this.router.navigate([redirect]);
    }, err => {
      console.log(err);
      this.authService.isLog = false;
      this.message = err.message;
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  createUser(values: any) {
    this.message = "Création en cours...";
    this.authService.createNewUser(values.email, values.pw).then(() => {
      this.message = "Votre compte a bien été créé, vous pouvez maintenant vous connecter !";
    }, err => {
      this.message = err.message;
    });
  }

}
