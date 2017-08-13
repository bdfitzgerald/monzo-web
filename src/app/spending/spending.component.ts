import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class Spending implements OnInit {

  months: any;

  view: any[] = [700, 400];

  colorSchemeUnder = {
    domain: ['#14233c', '#03a9f4', '#5AA454']
  };

  colorSchemeOver = {
    domain: ['#14233c', '#03a9f4', '#A10A28']
  };

  constructor() { }

  ngOnInit() {

    this.months = [
      {
        month: '2017-07',
        categories: [
          {
            icon: 'shopping_cart',
            title: 'Groceries',
            spent: '53.00',
          },
          {
            icon: 'lightbulb_outline',
            title: 'Bills',
            spent: '18.00',
          },
          {
            icon: 'restaurant',
            title: 'Eating Out',
            spent: '6.00',
          },
          {
            icon: 'local_movies',
            title: 'Entertainment',
            spent: '1.00',
          }
        ],
        budget: [
          {
            "name": "Total",
            "value": 77.32,
          },
          {
            "name": "Budget",
            "value": 361.58
          },
          {
            "name": "Remaining",
            "value": 282.10
          }
        ],
        scheme: this.colorSchemeUnder
      },{
        month: '2017/06/01',
        categories: [
          {
            icon: 'local_atm',
            title: 'cash',
            spent: '120.00',
          },
          {
            icon: 'restaurant',
            title: 'Eating Out',
            spent: '100.00',
          },
          {
            icon: 'local_movies',
            title: 'Entertainment',
            spent: '48.00',
          },
          {
            icon: 'shopping_cart',
            title: 'Groceries',
            spent: '43.00',
          },
          {
            icon: 'local_mall',
            title: 'shopping',
            spent: '21.00',
          },
          {
            icon: 'lightbulb_outline',
            title: 'Bills',
            spent: '17.00',
          },
          {
            icon: 'train',
            title: 'transport',
            spent: '15.00',
          },
        ],
        budget: [
          {
            "name": "Total",
            "value": 362.72,
          },
          {
            "name": "Budget",
            "value": 356.74
          },
          {
            "name": "Remaining",
            "value": -6.02
          }
        ],
        scheme: this.colorSchemeOver
      }
    ]
  }



}
