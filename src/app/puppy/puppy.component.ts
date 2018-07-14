import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss']
})
export class PuppyComponent {
  @Input() public waggilyPup: true;
}
