import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';



@NgModule({
  declarations: [UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
