import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard implements OnInit {

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Spent';
  autoScale = true;
  colorScheme = {
    domain: ['#14233c', '#03a9f4', '#14233c', '#03a9f4']
  };
  multi = [

    {
      "name": "Budget",
      "series": [
        {
          "name": "Dec",
          "value": 410.00
        },
        {
          "name": "Jan",
          "value": 280.00
        },
        {
          "name": "Feb",
          "value": 280.00
        },
        {
          "name": "Mar",
          "value": 350.00
        },
        {
          "name": "Apr",
          "value": 370.00
        }
      ]
    },

    {
      "name": "Spend",
      "series": [
        {
          "name": "Dec",
          "value": 470.00
        },
        {
          "name": "Jan",
          "value": 245.66
        },
        {
          "name": "Feb",
          "value": 258.33
        },
        {
          "name": "Mar",
          "value": 423.89
        },
        {
          "name": "Apr",
          "value": 346.58
        }
      ]
    }
  ];

  transactions = [
    {
      icon: 'credit_card',
      title: 'Sainsbury\'s',
      description: 'This is a short description',
      spent: '17.98'
    },
    {
      icon: 'credit_card',
      title: 'Pub',
      description: 'This is a short description',
      spent: '4.50'
    },
    {
      icon: 'credit_card',
      title: 'Bus',
      description: 'This is a short description',
      spent: '4.20'
    },
    {
      icon: 'credit_card',
      title: 'Sainsbury\'s',
      description: 'This is a short description',
      spent: '32.74'
    },
    {
      icon: 'credit_card',
      title: 'National Rail',
      description: 'This is a short description',
      spent: '52.14'
    }
  ];

  spending = [
    {
      icon: 'credit_card',
      type: 'Bills',
      description: 'This is a short description',
      spent: '87.60'
    },
    {
      icon: 'credit_card',
      type: 'Travel',
      description: 'This is a short description',
      spent: '52.74'
    },
    {
      icon: 'credit_card',
      type: 'Groceries',
      description: 'This is a short description',
      spent: '44.24'
    },
    {
      icon: 'credit_card',
      type: 'Cash',
      description: 'This is a short description',
      spent: '30.00'
    },
    {
      icon: 'credit_card',
      type: 'Entertainment',
      description: 'This is a short description',
      spent: '14.50'
    },
  ];

  deposits = [
    {
      icon: 'credit_card',
      title: 'Top Up',
      description: 'This is a short description',
      spent: '40.00'
    },
    {
      icon: 'credit_card',
      title: 'Top Up',
      description: 'This is a short description',
      spent: '20.00'
    },
    {
      icon: 'credit_card',
      title: 'Top Up',
      description: 'This is a short description',
      spent: '20.00'
    }
  ];

  constructor() { }



  ngOnInit() {
  }

}
