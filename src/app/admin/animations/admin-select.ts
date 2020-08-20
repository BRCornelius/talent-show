import { trigger, transition, style, animate, state } from '@angular/animations';

export const adminSelect = trigger('toggleAdmin', [
    state('open', style({
      backgroundColor: 'rgb(219, 23, 23)',
      'border-top-left-radius': '0.75rem',
      'border-top-right-radius': '0.75rem',
      color: 'white'
    })),
    state('closed', style({
    })),
    transition('open => closed', [
      animate('0.1s')
    ]),
    transition('closed => open', [
      animate('0.3s')
    ])
]);
