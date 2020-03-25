import { PrestationsI } from '../interfaces/prestations-i';
import { StatePrestation } from '../enums/state-prestation.enum';

export class Prestation implements PrestationsI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StatePrestation.OPTION;
  comment: string;
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    console.log('TOTAL HT CALLED');

    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    console.log('TOTAL TTC CALLED');
    if (this.tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + this.tva / 100);
  }

}
