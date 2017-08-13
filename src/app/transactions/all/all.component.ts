import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { Transactions } from "../../services/transactions/transactions.service";

@Component({
  selector: 'transactions-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class TransactionsAll implements OnInit {
  
  transactions: any = [];

  constructor(
    private _loadingService: TdLoadingService,
    private transactionsData: Transactions
  ) { }

  ngOnInit() {
    if(this.transactions.length === 0) {
      this._loadingService.register ( 'all' );
      this.transactions = this.transactionsData.all;
      this._loadingService.resolve ( 'all' );
    }
  }

  initialTransactions() {
    this.transactions = this.transactionsData.all;
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
