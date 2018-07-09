import { Component } from '@angular/core';
import { Tonart } from '../tonart.model';

import { tonarten } from '../static/tonarten';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  tonarten: Tonart[] = tonarten;
}
