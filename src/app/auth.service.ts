import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLog = false;
  redirectUrl: string;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string): Promise<any> {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createNewUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
 }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
