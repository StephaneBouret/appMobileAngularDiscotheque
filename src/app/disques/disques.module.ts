import { DisquesService } from './disques.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurvolDirective } from './../disques/survol.directive';
import { CapitalizePipe } from './../disques/capitalize.pipe';
import { CategoryColorPipe } from './../disques/category-color.pipe';
import { ListDisquesComponent } from './../disques/list-disques/list-disques.component';
import { InfosDisqueComponent } from './../disques/infos-disque/infos-disque.component';

// Materialize Modules
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatProgressBarModule} from '@angular/material/progress-bar';


import { DisquesRoutingModule } from './disques-routing.module';
import { DisqueFormComponent } from './disque-form/disque-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDisqueComponent } from './edit-disque/edit-disque.component';
import { AddDisqueComponent } from './add-disque/add-disque.component';
import { SearchDisqueComponent } from './search-disque/search-disque.component';

@NgModule({
  declarations: [
    SurvolDirective,
    CapitalizePipe,
    CategoryColorPipe,
    ListDisquesComponent,
    InfosDisqueComponent,
    DisqueFormComponent,
    EditDisqueComponent,
    AddDisqueComponent,
    SearchDisqueComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    DisquesRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    DisquesService
  ]
})
export class DisquesModule { }
