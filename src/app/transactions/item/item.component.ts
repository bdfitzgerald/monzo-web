import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: any;
  icon: string;
  iconColor: string;

  constructor() { }

  ngOnInit() {
    switch (this.transaction.category) {
      case 'groceries':
        this.icon = 'local_grocery_store';
        this.iconColor = 'tc-yellow-600';
        break;
      case 'cash':
        this.icon = 'attach_money';
        this.iconColor = 'tc-green-800';
        break;
      case 'shopping':
        this.icon = 'shop';
        this.iconColor = 'tc-red-400';
        break;
      case 'eating_out':
        this.icon = 'local_dining';
        this.iconColor = 'tc-red-800';
        break;
      case 'holidays':
        this.icon = 'card_travel';
        this.iconColor = 'tc-indigo-600';
        break;
      case 'transport':
        this.icon = 'train';
        this.iconColor = 'tc-blue-800';
        break;
      case 'bills':
        this.icon = 'lightbulb_outline';
        this.iconColor = 'tc-light-blue-400';
        break;
      case 'entertainment':
        this.icon = 'local_drink';
        this.iconColor = 'tc-orange-600';
        break;
      case 'general':
        this.icon = 'dashboard';
        this.iconColor = 'tc-grey-600';
        break;
    }
  }

}
