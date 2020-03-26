import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';

const routes: Routes = [
  {
    path: '',
    component: PageListPrestationsComponent,
    data: { title: 'Prestations', subtitle: 'Toutes les prestations' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }

