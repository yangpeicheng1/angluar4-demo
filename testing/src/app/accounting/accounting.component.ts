import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import {AccountService} from '../../service/account.service';
@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AccountingComponent implements OnInit{
  title = 'accounting';
  money='';
  billTypes:any;
  contentStyle = {
    'overflow': 'scroll',
    'height': window.screen.availHeight - 145 + 'px'
  };
  constructor(private service: AccountService) {}
  getBillTypesFn(par):void{
    this.service.getBillTypes(par).then(data => {
      this.billTypes=data;
      console.log(this.billTypes)
    });
  }
  ngOnInit():void{
    this.getBillTypesFn(null)
  }

}
