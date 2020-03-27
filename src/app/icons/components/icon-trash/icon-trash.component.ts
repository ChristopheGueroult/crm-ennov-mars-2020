import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-icon-trash',
  templateUrl: './icon-trash.component.html',
  styleUrls: ['./icon-trash.component.scss']
})
export class IconTrashComponent implements OnInit {
  public faTrashAlt = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
