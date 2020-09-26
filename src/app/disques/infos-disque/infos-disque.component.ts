import { Disque } from './../disque.model';
import { DisquesService } from './../disques.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infos-disque',
  templateUrl: './infos-disque.component.html',
  styleUrls: ['./infos-disque.component.css']
})
export class InfosDisqueComponent implements OnInit {
  disques: Disque[] = null;
  disque: Disque = null;

  constructor(
    private route: ActivatedRoute,
    private disquesService: DisquesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDisque();
  }

  getDisque() {
    const id = this.route.snapshot.paramMap.get('id');
    this.disquesService.getDisque(id).subscribe(data => {
      this.disque = { id, ...data };
    }, err => console.log(err));
  }

  editDisque(id: string): void {
    this.router.navigate(['/disque/edit', id]);
  }

  deleteDisque(disque: Disque) {
    if (confirm("Souhaitez-vous vraiment supprimer ce disque ?")) {
     this.disquesService.deleteDisque(disque.id).then(() => {
      // if (disque.picture.includes("https://firebasestorage")) {
      //   this.disquesService.deleteImgStorage(disque.id).subscribe(() => {
      //     this.router.navigate(['/disques']);
      //   });
      // } else {
      //   this.router.navigate(['/disques']);
      // }
      this.router.navigate(['/disques']);
      }, err => console.log(err));
    }
  }

}
