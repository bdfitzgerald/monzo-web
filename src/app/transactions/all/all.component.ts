import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-transactions-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class TransactionsAllComponent implements OnInit {

  @ViewChild('scrollable') scrollable: ElementRef;
  transactions: any = [];
  allTransactions: any = [];
  length: number;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];

  constructor(
    private _loadingService: TdLoadingService,
    private transactionsData: TransactionsService
  ) { }

  ngOnInit() {
    if (this.transactions.length === 0) {
      this._loadingService.register ( 'all' );
      this.initialTransactions();
      this.transactions = this.allTransactions.slice(0, this.pageSize);
      this.length = this.allTransactions.length;
      this._loadingService.resolve ( 'all' );
      console.log(this.scrollable);
    }
  }

  pageChange(ev: PageEvent) {
    console.log(this.allTransactions);
    const start = ev.pageIndex * ev.pageSize;
    const end = start + ev.pageSize;
    this.transactions = this.allTransactions.slice(start, end);
    this.scrollable.nativeElement.scrollTop = 0;
  }

  initialTransactions() {
    this.allTransactions = this.transactionsData.all;
  }

  search(filter: any) {
    this.initialTransactions();
    // if the value is an empty string don't filter the items
    if (filter && filter.trim() !== '' ) {
      this.allTransactions = this.allTransactions.filter((transaction) => {
        if ( transaction.merchant ) {
          return (transaction.merchant.name.toLowerCase ().indexOf (filter.toLowerCase ()) > -1 ||
            transaction.category.toLowerCase ().indexOf (filter.toLowerCase ()) > -1);
        } else {
          return false;
        }
      });
      this.transactions = this.allTransactions.slice(0, this.pageSize);
      this.length = this.allTransactions.length;
    }
  }

}
