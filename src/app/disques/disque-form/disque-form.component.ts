import { Observable } from 'rxjs';
import { DisquesService } from './../disques.service';
import { Disque } from './../disque.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-disque-form',
  templateUrl: './disque-form.component.html',
  styleUrls: ['./disque-form.component.css']
})
export class DisqueFormComponent implements OnInit {
  @Input() disque: Disque;

  categories: Array<string>;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private disquesService: DisquesService,
    private router: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.categories = this.disquesService.getDisqueCategories();
  }


  testCategorie(cat: string): boolean {
    return this.disque.cat.includes(cat);
  }


  modifCategorie(evt: any, cat: string) {
    if (evt.checked) {
      this.disque.cat.push(cat);
    } else {
      const indexCat = this.disque.cat.indexOf(cat);
      this.disque.cat.splice(indexCat, 1);
    }
    // console.log(this.disque.cat);
  }

  testNbreCategorie(cat: string): boolean {
    const nbreCat = this.disque.cat.length;
    if (nbreCat >= 4 && !this.testCategorie(cat) ||
    nbreCat === 1 && this.testCategorie(cat)) {
      return true;
    }
    return false;
  }

  onSubmit(): void {
    this.disquesService.updateDisque(this.disque).then(() => {
      this.router.navigate(['/disque', this.disque.id]);
    }, err => console.log(err));
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.disque.id;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    ).subscribe(() => {
      fileRef.getDownloadURL().subscribe(datas => {
        this.disque.picture = datas;
      });
    });
  }


}
