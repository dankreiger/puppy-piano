import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
})
export class PianoComponent {
  private octave = `
  <li>
    <div class="anchor"></div>
  </li>
  <li>
    <div class="anchor"></div>
    <span></span>
  </li>
  <li>
    <div class="anchor"></div>
    <span></span>
  </li>
  <li>
    <div class="anchor"></div>
  </li>
  <li>
    <div class="anchor"></div>
    <span></span>
  </li>
  <li>
    <div class="anchor"></div>
    <span></span>
  </li>
  <li>
    <div class="anchor"></div>
    <span></span>
  </li>
  `;

  public displayOctave: object = (num) => this.octave.repeat(num);

}

