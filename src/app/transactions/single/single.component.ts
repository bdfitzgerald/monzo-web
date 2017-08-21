import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../services/transactions/transactions.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

export class TransactionsSingleComponent implements OnInit {

  transaction: any;
  icon: string;
  iconColor: string;
  merchantTransactions = [];
  count = 0;
  total = 0;
  average: number;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private transactions: TransactionsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.transactions.getTransaction(params.id).subscribe( data => {
        this.transaction = data.transaction;
        this.getMetrics();
        this.getIcon();
      })
    })
  }

  getMetrics() {
    for ( const transaction of this.transactions.all ) {
      if (transaction.merchant && transaction.merchant.name === this.transaction.merchant.name) {
        this.merchantTransactions.push(transaction);
        this.count++;
        this.total += transaction.local_amount;
      }
    }
    this.average = this.total / this.count;
  }

  getIcon() {
    switch (this.transaction.category) {
      case 'groceries':
        this.icon = 'local_grocery_store';
        this.iconColor = 'tc-yellow-600';
        break;
      case 'cash':
        this.icon = 'attach_money';
        this.iconColor = 'tc-green-800';
        break;
      case 'shopping':
        this.icon = 'shop';
        this.iconColor = 'tc-red-400';
        break;
      case 'eating_out':
        this.icon = 'local_dining';
        this.iconColor = 'tc-red-800';
        break;
      case 'holidays':
        this.icon = 'card_travel';
        this.iconColor = 'tc-indigo-600';
        break;
      case 'transport':
        this.icon = 'train';
        this.iconColor = 'tc-blue-800';
        break;
      case 'bills':
        this.icon = 'lightbulb_outline';
        this.iconColor = 'tc-light-blue-400';
        break;
      case 'entertainment':
        this.icon = 'local_drink';
        this.iconColor = 'tc-orange-600';
        break;
      case 'general':
        this.icon = 'dashboard';
        this.iconColor = 'tc-grey-600';
        break;
    }
  }

  back() {
    this.location.back();
  }

}
