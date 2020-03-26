import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
