import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  @ViewChild('scrollable') scrollable: ElementRef;
  id: string;
  merchant: any;
  merchantTransactions = [];
  transactions: any = [];
  length: number;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];

  constructor(
    private _loadingService: TdLoadingService,
    private transactionsData: TransactionsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.id;
      if ( this.transactions.length === 0 ) {
        this._loadingService.register ('merchant');
        this.initialTransactions ();
        this.transactions = this.merchantTransactions.slice (0, this.pageSize);
        this.length = this.merchantTransactions.length;
        this._loadingService.resolve ('merchant');
      }
    } );
  }

  pageChange(ev: PageEvent) {
    const page = ev.pageIndex + 1;
    const start = ev.pageIndex * ev.pageSize;
    const end = start + ev.pageSize;
    this.transactions = this.merchantTransactions.slice(start, end);
    this.scrollable.nativeElement.scrollTop = 0;
  }

  initialTransactions() {
    for ( const transaction of this.transactionsData.all ) {
      if (transaction.merchant && transaction.merchant.id === this.id ) {
        if (!this.merchant) {
          this.merchant = transaction.merchant;
          break;
        }
      }
    }
    for ( const transaction of this.transactionsData.all ) {
      if (transaction.merchant && transaction.merchant.name === this.merchant.name ) {
        this.merchantTransactions.push(transaction);
      }
    }
  }

}
