import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routes = [
    {
      icon: 'dashboard',
      title: 'Dashboard',
      route: '',
    },
    {
      icon: 'credit_card',
      title: 'Transactions',
      route: '/transactions',
    },
    {
      icon: 'shopping_cart',
      title: 'Spending',
      route: '/spending',
    },
    {
      icon: 'timeline',
      title: 'Reports',
      route: '',
    },
    {
      icon: 'work',
      title: 'Budget',
      route: '',
    }
  ];

  constructor(
    private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'monzo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/monzo-inverse.svg'));
  }

}
