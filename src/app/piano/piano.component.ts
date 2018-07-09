import { Component, OnInit } from '@angular/core';
import { Synth } from 'tone';
import { octaves, tonDrueckenSwitch, tonLassenSwitch, spielTon } from './helpers';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {
  public octaves = octaves;

  onClickTon(event) {
    const synth = new Synth().toMaster();
    synth.triggerAttackRelease((<Element>event.target).id, '8n');
  }

  ngOnInit() {
    document.body.onkeydown = e => {
      console.log(e.code); // to be continued
      tonDrueckenSwitch(e.code);
    };

    document.body.onkeyup = e => {
      tonLassenSwitch(e.code);
    };
  }
}
