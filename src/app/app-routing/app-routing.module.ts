import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error404/error404.component';
import { LoginComponent } from '../login/login.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'disques', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
