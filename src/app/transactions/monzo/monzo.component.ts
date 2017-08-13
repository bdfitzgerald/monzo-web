import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'transactions-monzo',
  templateUrl: './monzo.component.html',
  styleUrls: ['./monzo.component.scss']
})
export class TransactionsMonzo implements OnInit {

  transactions: any = [];

  constructor(private _loadingService: TdLoadingService) { }

  ngOnInit() {
    if(this.transactions.length === 0) {
      this._loadingService.register ( 'monzo' );
      setTimeout ( () => {
        this.initialTransactions ();
        this._loadingService.resolve ( 'monzo' );
      }, 2000 );
    }
  }

  initialTransactions() {
    this.transactions = [
      {
        icon: 'credit_card',
        title: 'Sainsbury\'s',
        description: 'This is a short description',
        spent: '17.98',
        category: 'groceries'
      },
      {
        icon: 'credit_card',
        title: 'Pub',
        description: 'This is a short description',
        spent: '4.50',
        category: 'entertainment'
      },
      {
        icon: 'credit_card',
        title: 'Bus',
        description: 'This is a short description',
        spent: '4.20',
        category: 'transport'
      },
      {
        icon: 'credit_card',
        title: 'Sainsbury\'s',
        description: 'This is a short description',
        spent: '32.74',
        category: 'groceries'
      },
      {
        icon: 'credit_card',
        title: 'National Rail',
        description: 'This is a short description',
        spent: '52.14',
        category: 'transport'
      },
      {
        icon: 'credit_card',
        title: 'Sainsbury\'s',
        description: 'This is a short description',
        spent: '17.98',
        category: 'groceries'
      },
      {
        icon: 'credit_card',
        title: 'Pub',
        description: 'This is a short description',
        spent: '4.50',
        category: 'entertainment'
      },
      {
        icon: 'credit_card',
        title: 'Bus',
        description: 'This is a short description',
        spent: '4.20',
        category: 'transport'
      },
      {
        icon: 'credit_card',
        title: 'Sainsbury\'s',
        description: 'This is a short description',
        spent: '32.74',
        category: 'groceries'
      },
      {
        icon: 'credit_card',
        title: 'National Rail',
        description: 'This is a short description',
        spent: '52.14',
        category: 'transport'
      }
    ];
  }

  search(filter: any) {
    this.initialTransactions();
    // if the value is an empty string don't filter the items
    if (filter && filter.trim() != '') {
      this.transactions = this.transactions.filter((transaction) => {
        return (transaction.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 || transaction.category.toLowerCase().indexOf(filter.toLowerCase()) > -1);
      })
    }
  }

}
