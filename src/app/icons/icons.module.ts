import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconTrashComponent } from './components/icon-trash/icon-trash.component';
import { IconInfoComponent } from './components/icon-info/icon-info.component';


@NgModule({
  declarations: [IconNavComponent, IconTrashComponent, IconInfoComponent],
  exports: [IconNavComponent, IconTrashComponent, IconInfoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
