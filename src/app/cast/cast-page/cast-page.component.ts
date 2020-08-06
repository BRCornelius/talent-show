import { Component, OnInit } from '@angular/core';
import { CastService } from '../services/cast.service';

@Component({
  selector: 'cast-page',
  templateUrl: './cast-page.component.html',
  styleUrls: ['./cast-page.component.css']
})
export class CastPageComponent implements OnInit {

  constructor(private cast: CastService) { }

  ngOnInit() {
    this.cast.getEmployees();
  }

}
