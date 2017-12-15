import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { WeUiModule } from 'ngx-weui';
import { AppRoutingModule } from '../route/app-routing.module';
import { EchartsNg2Module } from 'echarts-ng2';
//数据引入
import {AccountService} from '../service/account.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {AccountingComponent} from './accounting/accounting.component'
import {CountComponent} from './count/count.component'
import {CountYearComponent} from './count/count-year/count-year.component'
import {CountMonthComponent} from './count/count-month/count-month.component'
/*
export const ROUTES: Routes = [
  { path: '#', component: AccountingComponent },
  { path: 'count', component: CountComponent }
];*/
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountingComponent,
    CountComponent,
    CountYearComponent,
    CountMonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EchartsNg2Module ,
    WeUiModule.forRoot()
  ],
  //注册数据
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
