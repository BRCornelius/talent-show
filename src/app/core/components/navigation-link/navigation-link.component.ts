import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'core-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.css']
})
export class NavigationLinkComponent implements OnInit {

  constructor(public nav: NavigationService) { }

  ngOnInit() {
    this.active = this.nav.checkActiveNavLink(this.link.label);
  }

  @Input() link: any;

  active: boolean;

  onClick: Function = () => {
    this.nav.updateActiveNavLink(this.link.label);
    this.active = this.nav.checkActiveNavLink(this.link.label);
  }

}
