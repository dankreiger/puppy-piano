// the puppy woofer file

import { Synth } from 'tone';
import { keyMap } from './keyMap';

let gedrueckt = false;

const tonDruecken = ton => {
  if (document.getElementById(ton)) {
    document.getElementById(ton).classList.add('active');
  }
};

const tonLassen = ton => {
  gedrueckt = false;
  if (document.getElementById(ton)) {
    document.getElementById(ton).classList.remove('active');
  }
};

export const spielTon = ton => {
  if (!gedrueckt) {
    gedrueckt = true;
    const synth = new Synth().toMaster();
    synth.triggerAttackRelease(ton, '8n');
  }
};


export const tonSpielenMap = code => { spielTon(keyMap[code]); tonDruecken(keyMap[code]); };
export const tonLassenMap = code => tonLassen(keyMap[code]);


