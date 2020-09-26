import { map } from 'rxjs/operators';
import { Disque } from './disque.model';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class DisquesService {
  disquesCollectionReference: AngularFirestoreCollection<Disque>;
  disqueDoc: AngularFirestoreDocument<Disque>;

  constructor(
    private afs: AngularFirestore,
    // private storage: AngularFireStorage
  ) {
    this.disquesCollectionReference = this.afs.collection<Disque>('disques/');
  }

  getAllDisques() {
    return this.disquesCollectionReference.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Disque;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getDisque(id: string) {
    this.disqueDoc = this.afs.doc<Disque>('disques/' + id);
    return this.disqueDoc.valueChanges();
  }

  deleteDisque(id: string): Promise<any> {
    return this.disquesCollectionReference.doc(id).delete();
  }

  // deleteImgStorage(id: string): Observable<any> {
  //   return this.storage.ref(id).delete();
  // }

  updateDisque(disque: Disque): Promise<any> {
    return this.disquesCollectionReference.doc(disque.id).update({
      name: disque.name,
      title: disque.title,
      picture: disque.picture,
      cat: disque.cat,
      stock: disque.stock
    });
  }

  addDisque(disque: Disque): Promise<any> {
    return this.disquesCollectionReference.add(disque);
  }

  getDisqueCategories(): Array<string> {
    return ['Soul', 'Disco', 'Variétés', 'Jazz', 'Classique',
    'Funk', 'Autre', 'Etranger', 'Français'];
  }

  searchDisques(term: string): Observable<Disque[]> {
    return this.afs.collection('disques', ref =>
      ref.orderBy('name')
      .startAt(term)
      .endAt(term + '\uf8ff ')
      .limit(5)
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Disque;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
 }



}
