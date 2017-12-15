import { Component} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  title:string = 'count';
  activeIndex:number =1;
  setActive(i) { // 设置标记
    this.activeIndex = i;
  }
}
