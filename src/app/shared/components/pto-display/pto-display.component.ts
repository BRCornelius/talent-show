import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-pto-display',
  templateUrl: './pto-display.component.html',
  styleUrls: ['./pto-display.component.css']
})
export class PtoDisplayComponent implements OnInit {

  constructor() { }

  @Input() teamMember;
  @Input() teamMembers;
  @Input() type;

  ngOnInit() {
  }

}
