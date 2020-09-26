import { Disque } from './../disque.model';
import { DisquesService } from './../disques.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-disque',
  templateUrl: './edit-disque.component.html',
  styleUrls: ['./edit-disque.component.css']
})
export class EditDisqueComponent implements OnInit {
  disque: Disque = null;

  constructor(
    private route: ActivatedRoute,
    private disquesService: DisquesService
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

}
