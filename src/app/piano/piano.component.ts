import { Component, OnInit } from '@angular/core';
import { Synth } from 'tone';
import { tonSpielenMap, tonLassenMap } from './helpers';
import { displayOctaves } from './octaves';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {
  public displayOctaves = displayOctaves;

  onClickTon(event) {
    const synth = new Synth().toMaster();
    synth.triggerAttackRelease((<Element>event.target).id, '8n');
  }

  ngOnInit() {
    document.body.onkeydown = e => {
      tonSpielenMap(e.code);
    };

    document.body.onkeyup = e => {
      tonLassenMap(e.code);
    };
  }
}
