import { DisquesService } from './../disques.service';
import { Component, OnInit } from '@angular/core';
import { Disque } from '../disque.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-disques',
  templateUrl: './list-disques.component.html',
  styleUrls: ['./list-disques.component.css']
})
export class ListDisquesComponent implements OnInit {
  disques: Disque[];
  largeur: boolean;

  constructor(
    private router: Router,
    private disquesServices: DisquesService
    ) {}

  ngOnInit() {
    this.getDisques();
    this.testLargeur();

  }

  getDisques() {
    this.disquesServices.getAllDisques().subscribe(response => {
      this.disques = response;
    }, err => console.log(err));
  }

  testLargeur() {
    if (window.innerWidth > 700) {
      this.largeur = true;
    } else {
      this.largeur = false;
    }
  }

  selectDisque(id: string) {
    // console.log(id);
    this.router.navigate(['/disque', id]);
  }

}
