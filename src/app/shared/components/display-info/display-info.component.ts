import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent {

  constructor() { }

  @Input() topText: string;
  @Input() bottomLeftText: string;
  @Input() bottomRightText: string;

}
