import {NgModule} from '@angular/core'

import {RouterModule,Routes} from '@angular/router'

import {AccountingComponent} from '../app/accounting/accounting.component'
import {CountComponent} from '../app/count/count.component'
import {CountMonthComponent} from '../app/count/count-month/count-month.component'
import { CountYearComponent} from '../app/count/count-year/count-year.component'

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account',  component:AccountingComponent},
  { path: 'count',  component:CountComponent, children: [
    { path: '', component: CountMonthComponent },
    { path: 'year', component: CountYearComponent }
  ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
