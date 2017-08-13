import { Injectable } from '@angular/core';
import { Monzo } from "../../data/transaction_data";

@Injectable()
export class Transactions {

  all: any;

  constructor(
    public monzo: Monzo
  ) {
    this.getTransactions();
  }

  getTransactions() {
    this.all = this.monzo.transactions.reverse();
  }

}
