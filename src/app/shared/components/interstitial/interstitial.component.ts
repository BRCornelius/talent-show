import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.css']
})
export class InterstitialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() topic: string;

  getSource: Function = (): string => {
    switch(this.topic) {
      case "carey":
        return "https://assets.corneliuses.com/photos/common/interstitial-typing.gif"
      case "lenny":
        return "https://assets.corneliuses.com/photos/common/interstitial-lenny.gif"
      default:
        return "https://assets.corneliuses.com/photos/common/interstitial-duncan.gif"
    };
  };
}
