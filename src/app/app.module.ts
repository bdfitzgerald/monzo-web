import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsAllComponent } from './transactions/all/all.component';
import { SpendingComponent } from './spending/spending.component';
import { TransactionsSingleComponent } from './transactions/single/single.component';
import { TransactionItemComponent } from './transactions/item/item.component';
import { TransactionsService } from './services/transactions/transactions.service';
import {AccountService} from './services/account/account.service';
import { DepositsComponent } from './transactions/deposits/deposits.component';
import { ExpenditureComponent } from './transactions/expenditure/expenditure.component';
import { MerchantComponent } from './transactions/merchant/merchant.component';

const routes: Routes = [

  {
    path: 'oauth/callback',
    component: AuthComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'transactions', component: TransactionsComponent},
      {path: 'transactions/:id', component: TransactionsSingleComponent},
      {path: 'transactions/merchant/:id', component: MerchantComponent},
      {path: 'spending', component: SpendingComponent}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    TransactionsComponent,
    TransactionsAllComponent,
    SpendingComponent,
    TransactionsSingleComponent,
    TransactionItemComponent,
    DepositsComponent,
    ExpenditureComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.maps.api_key
    }),
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SharedModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    TransactionsService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
