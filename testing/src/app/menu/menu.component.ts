import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { InfiniteLoaderComponent } from 'ngx-weui/infiniteloader';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  title = 'menu';

}
