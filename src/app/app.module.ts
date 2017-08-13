import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Dashboard } from './dashboard/dashboard.component';

import { Auth } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { Auth as AuthCheck } from './auth/auth.component';
import { TransactionsContainer } from './transactions/transactions.component';
import { TransactionsMonzo } from './transactions/monzo/monzo.component';
import { TransactionsOther } from './transactions/other/other.component';
import { TransactionsAll } from './transactions/all/all.component';
import { Spending } from './spending/spending.component';
import { TransactionsSingle } from './transactions/single/single.component';
import { TransactionItem } from './transactions/item/item.component';
import { Transactions } from "./services/transactions/transactions.service";
import { Monzo } from "./data/transaction_data";
import { TransactionsIcon } from './transactions/icon/icon.component';

const routes: Routes = [

  {
    path: 'oauth/callback',
    component: AuthCheck
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: '', component: Dashboard, pathMatch: 'full'},
      {path: 'transactions', component: TransactionsContainer},
      {path: 'transactions/:id', component: TransactionsSingle},
      {path: 'spending', component: Spending}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    AuthCheck,
    TransactionsContainer,
    TransactionsMonzo,
    TransactionsOther,
    TransactionsAll,
    Spending,
    TransactionsSingle,
    TransactionItem,
    TransactionsIcon
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.maps.api_key
    }),
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SharedModule,
    AngularFireDatabaseModule
  ],
  providers: [
    Auth,
    AuthGuard,
    Transactions,
    Monzo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
