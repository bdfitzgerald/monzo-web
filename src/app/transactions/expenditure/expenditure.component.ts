import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {

  @ViewChild('scrollable') scrollable: ElementRef;
  expenditures = [];
  transactions: any = [];
  length: number;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];

  constructor(
    private _loadingService: TdLoadingService,
    private transactionsData: TransactionsService
  ) { }

  ngOnInit() {
    if (this.transactions.length === 0) {
      this._loadingService.register ( 'expenditures' );
      this.initialTransactions();
      this.transactions = this.expenditures.slice(0, this.pageSize);
      this.length = this.expenditures.length;
      this._loadingService.resolve ( 'expenditures' );
      console.log(this.scrollable);
    }
  }

  pageChange(ev: PageEvent) {
    const page = ev.pageIndex + 1;
    const start = ev.pageIndex * ev.pageSize;
    const end = start + ev.pageSize;
    this.transactions = this.expenditures.slice(start, end);
    this.scrollable.nativeElement.scrollTop = 0;
  }

  initialTransactions() {
    for ( const transaction of this.transactionsData.all ) {
      if (transaction.merchant && !transaction.metadata.is_topup ) {
        this.expenditures.push(transaction);
      }
    }
  }

  search(filter: any) {
    this.initialTransactions();
    // if the value is an empty string don't filter the items
    if (filter && filter.trim() !== '' ) {
      this.transactions = this.transactions.filter((transaction) => {
        return (transaction.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          transaction.category.toLowerCase().indexOf(filter.toLowerCase()) > -1);
      })
    }
  }

}
