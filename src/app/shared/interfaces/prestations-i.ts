import { StatePrestation } from '../enums/state-prestation.enum';

export interface PrestationsI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StatePrestation;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
