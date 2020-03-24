import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationsService } from './services/prestations.service';



@NgModule({
  declarations: [PageListPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
