import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
