import { Component } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'core-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(public nav: NavigationService) { }

}
