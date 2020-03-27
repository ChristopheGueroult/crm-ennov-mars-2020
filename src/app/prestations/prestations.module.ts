import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormPrestaComponent } from './components/form-presta/form-presta.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { DetailPrestaComponent } from './components/detail-presta/detail-presta.component';
import { CommentPrestaComponent } from './components/comment-presta/comment-presta.component';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FormPrestaComponent, PageEditPrestationComponent, DetailPrestaComponent, CommentPrestaComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
