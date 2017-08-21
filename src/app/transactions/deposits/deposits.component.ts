import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {

  @ViewChild('scrollable') scrollable: ElementRef;
  deposits = [];
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
      this._loadingService.register ( 'deposits' );
      this.initialTransactions();
      this.transactions = this.deposits.slice(0, this.pageSize);
      this.length = this.deposits.length;
      this._loadingService.resolve ( 'deposits' );
      console.log(this.scrollable);
    }
  }

  pageChange(ev: PageEvent) {
    const page = ev.pageIndex + 1;
    const start = ev.pageIndex * ev.pageSize;
    const end = start + ev.pageSize;
    this.transactions = this.deposits.slice(start, end);
    this.scrollable.nativeElement.scrollTop = 0;
  }

  initialTransactions() {
    for ( const transaction of this.transactionsData.all ) {
      if (!transaction.merchant && transaction.metadata.is_topup ) {
        this.deposits.push(transaction);
      }
    }
  }

}
