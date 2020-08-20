import { Injectable } from '@angular/core';
import { INavLink } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  splitURL: string[] = window.location.href.split('/');
  currentPath: string = this.splitURL[this.splitURL.length - 1];
  currentLabel: string = this.currentPath[0] ? this.currentPath[0].toUpperCase() + this.currentPath.substring(1) : 'Home';
  navLinks: INavLink[] = [
    { label: 'Home', path: '' },
    { label: 'Cast', path: 'cast' },
    { label: 'Teams', path: 'teams' },
    { label: 'Admin', path: 'admin' }
  ];

  checkActiveNavLink: Function = (testValue: string): boolean => this.currentLabel === testValue;
  updateActiveNavLink: Function = (newValue: string): void => {
    this.currentLabel = newValue;
  }
}
