import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsContainer implements OnInit {

	index: any;

  constructor() { }

  ngOnInit() {
  }

  selected(current) {
		console.log(current);
		this.index = current;
	}

}
