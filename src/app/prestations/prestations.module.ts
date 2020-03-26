import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormPrestaComponent } from './components/form-presta/form-presta.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FormPrestaComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
