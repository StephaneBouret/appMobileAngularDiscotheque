import { DisquesService } from './../disques.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Disque } from '../disque.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-disque',
  templateUrl: './search-disque.component.html',
  styleUrls: ['./search-disque.component.css']
})
export class SearchDisqueComponent implements OnInit {
  private recherche = new Subject<string>();
  disques$: Observable<Disque[]>;

  constructor(
    private disquesService: DisquesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.disques$ = this.recherche.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      switchMap((term: string) => this.disquesService.searchDisques(term))
    );
  }

  search(rech: string) {
    this.recherche.next(rech);
  }

  goToDisc(d: Disque) {
    this.router.navigate(['/disque', d.id]);
  }

}
