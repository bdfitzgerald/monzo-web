import { Injectable } from '@angular/core';
import { Monzo } from "./data/transaction_data";

@Injectable()
export class AccountService {

  transactions: any;

  constructor(
    public monzo: Monzo
  ) { }

  getTransactions() {
    this.transactions = this.monzo.transactions;
  }


}
