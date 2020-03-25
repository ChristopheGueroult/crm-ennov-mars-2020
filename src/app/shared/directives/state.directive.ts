import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { StatePrestation } from '../enums/state-prestation.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: StatePrestation;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

// passer un state à cette directive qui va le récupérer dans une variable depuis le composant parent
// à partir de ce state on veut générer un string qui va correspondre à un nom de class
// si appState vaut Annulé => state-annule
// si appState vaut Option => state-option
// si appState vaut Confirmé => state-confirme
// binder la propriété class du host element td avec ce string

