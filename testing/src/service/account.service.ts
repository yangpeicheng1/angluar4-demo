import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Urls} from './url';//引入接口
import {Result} from '../model/model.result';//引入模块类型
@Injectable()
export class AccountService {
  private urls = Urls;
  constructor(private http: Http) {}
  getBillTypes(par): Promise<Result>  {
    return this.get(this.urls.GetBillTypes,par);
  }
  //封装get请求
  private  get(url: string,par:any): Promise<Result>  {
    return this.http.get(url,par)
      .toPromise().then(res => res.json()as Result)
      .catch(this.handleError);
  }
  //封装post请求
  private  post(url: string, par: any): Promise<Result>  {
    return this.http.post(url,par)
      .toPromise().then(res => res.json()as Result)
      .catch(this.handleError);
  }
//捕获异常并输出
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject( error);
  }
}

