import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPrestaComponent } from './components/comment-presta/comment-presta.component';
import { DetailPrestaComponent } from './components/detail-presta/detail-presta.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';

const routes: Routes = [
  {
    path: '',
    component: PageListPrestationsComponent,
    data: { title: 'Prestations', subtitle: 'Toutes les prestations' },
    children: [
      {
        path: '',
        redirectTo: 'detail',
        pathMatch: 'full'
      },
      {
        path: 'detail',
        component: DetailPrestaComponent,
      },
      {
        path: 'comment',
        component: CommentPrestaComponent,
      },
    ]
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', subtitle: 'Ajouter une prestation' }
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: { title: 'Prestations', subtitle: 'Editer une prestation' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }

