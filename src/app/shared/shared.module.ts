import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule, ButtonComponent, IconsModule],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    IconsModule
  ]
})
export class SharedModule { }
