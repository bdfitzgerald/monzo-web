import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  index: any;

  constructor() { }

  ngOnInit() {
  }

  selected(current) {
    this.index = current;
  }

}
