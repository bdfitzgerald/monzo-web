import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transaction-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class TransactionItem implements OnInit {
  
  @Input() transaction: any;

  constructor() { }

  ngOnInit() {
  }

}
