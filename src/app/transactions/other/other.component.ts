import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'transactions-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class TransactionsOther implements OnInit {

  transactions: any = [];

  constructor(private _loadingService: TdLoadingService) { }

  ngOnInit() {
    if(this.transactions.length === 0) {
      this._loadingService.register('other');
      setTimeout( () => {
        this.initialTransactions();
        this._loadingService.resolve('other');
      }, 4000);
    }
  }

  initialTransactions() {
    this.transactions = [
      {
        icon: 'credit_card',
        title: 'Loc8me',
        description: 'Rent Paymnet',
        spent: '520.00',
        category: 'bills'
      },
      {
        icon: 'credit_card',
        title: 'NPower',
        description: 'Electricity Bill',
        spent: '47.00',
        category: 'bills'
      },
      {
        icon: 'credit_card',
        title: 'EMUAS',
        description: 'Mess Bill',
        spent: '335.36',
        category: 'other'
      },
      {
        icon: 'credit_card',
        title: 'BT',
        description: 'internet payment',
        spent: '29.99',
        category: 'bills'
      },
      {
        icon: 'credit_card',
        title: 'EMUAS',
        description: 'Cornwall Exped',
        spent: '113.00',
        category: 'entertainment'
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
