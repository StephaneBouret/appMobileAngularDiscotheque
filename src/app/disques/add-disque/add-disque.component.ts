import { Component } from '@angular/core';
import { Disque } from '../disque.model';
import { DisquesService } from '../disques.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-add-disque',
  templateUrl: './add-disque.component.html',
  styleUrls: ['./add-disque.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('off', style({
        transform: 'rotate(0) scale(0)'
      })),
      state('on', style({
        transform: 'rotate(360deg) scale(1)'
      })),
      transition('on <=> off', animate("1s ease-in-out"))
    ])
  ]
})
export class AddDisqueComponent {
  newDisque: Disque = {
    title: "",
    picture: "./../../../assets/imagesDiscotheque/default.jpg",
    cat: ["Autre"],
    stock: 0
  };

  buttonState = 'off';

  constructor(
    private disquesService: DisquesService,
    private router: Router
  ) { }

  animButton(valid: boolean) {
    if (valid) {
      this.buttonState = 'on';
    } else {
      this.buttonState = 'off';
    }
  }

  ajouterDisque(titre: string) {
    if (titre.trim() === '') { return; }
    this.newDisque.title = titre.trim();
    this.newDisque.created = new Date();
    this.disquesService.addDisque(this.newDisque).then(disque => {
      this.router.navigate(['/disque/edit', disque.id]);
    });
  }

}
