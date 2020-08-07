import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent {

  constructor() { }

  @Input() items: any[];
  @Input() path: string;

}
