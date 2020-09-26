import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDisquesComponent } from './list-disques/list-disques.component';
import { InfosDisqueComponent } from './infos-disque/infos-disque.component';
import { EditDisqueComponent } from './edit-disque/edit-disque.component';
import { AuthGuard } from '../auth.guard';

const disquesRoutes: Routes = [
  { path: 'disques', component: ListDisquesComponent, canActivate: [AuthGuard] },
  {
    path: 'disque',
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: InfosDisqueComponent },
      { path: 'edit/:id', component: EditDisqueComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(disquesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DisquesRoutingModule { }
