// the puppy woofer file

import { Synth } from 'tone';

let gedrueckt = false;

const tonDruecken = ton => {
  document.getElementById(ton).classList.add('active');
};

const tonLassen = ton => {
  gedrueckt = false;
  document.getElementById(ton).classList.remove('active');
};

export const spielTon = ton => {
  if (!gedrueckt) {
    gedrueckt = true;
    const synth = new Synth().toMaster();
    synth.triggerAttackRelease(ton, '8n');
  }
};

export const tonDrueckenSwitch = code => {
  switch (code) {
    case 'KeyA':
      spielTon('C3');
      tonDruecken('C3');
      break;
    case 'KeyW':
      spielTon('C#3');
      tonDruecken('C#3');
      break;
    case 'KeyS':
      spielTon('D3');
      tonDruecken('D3');
      break;
    case 'KeyE':
      spielTon('D#3');
      tonDruecken('D#3');
      break;
    case 'KeyD':
      spielTon('E3');
      tonDruecken('E3');
      break;
    case 'KeyF':
      spielTon('F3');
      tonDruecken('F3');
      break;
    default:
      return;
  }
};

export const tonLassenSwitch = code => {
  switch (code) {
    case 'KeyA':
      tonLassen('C3');
      break;
    case 'KeyW':
      tonLassen('C#3');
      break;
    case 'KeyS':
      tonLassen('D3');
      break;
    case 'KeyE':
      tonLassen('D#3');
      break;
    case 'KeyD':
      tonLassen('E3');
    case 'KeyF':
      tonLassen('F3');
      break;
    default:
      return;
  }
};

export const octaves = `
<li>
  <div class='weisse-taste' id='C3'></div>
</li>
<li>
  <div class='weisse-taste' id='D3'></div>
  <span id='C#3'></span>
</li>
<li>
  <div class='weisse-taste' id='E3'></div>
  <span id='D#3'></span>
</li>
<li>
  <div class='weisse-taste' id='F3'></div>
</li>
<li>
  <div class='weisse-taste' id='G3'></div>
  <span id='F#3'></span>
</li>
<li>
  <div class='weisse-taste' id='A3'></div>
  <span id='G#3'></span>
</li>
<li>
  <div class='weisse-taste' id='B3'></div>
  <span id='A#3'></span>
</li>
<li>
  <div class='weisse-taste' id='C4'></div>
</li>
<li>
  <div class='weisse-taste' id='D4'></div>
  <span id='C#4'></span>
</li>
<li>
  <div class='weisse-taste' id='E4'></div>
  <span id='D#4'></span>
</li>
<li>
  <div class='weisse-taste' id='F4'></div>
</li>
<li>
  <div class='weisse-taste' id='G4'></div>
  <span id='F#4'></span>
</li>
<li>
  <div class='weisse-taste' id='A4'></div>
  <span id='G#4'></span>
</li>
<li>
  <div class='weisse-taste' id='B4'></div>
  <span id='A#4'></span>
</li>
<li>
  <div class='weisse-taste' id='C5'></div>
</li>
<li>
  <div class='weisse-taste' id='D5'></div>
  <span id='C#5'></span>
</li>
<li>
  <div class='weisse-taste' id='E5'></div>
  <span id='D#5'></span>
</li>
<li>
  <div class='weisse-taste' id='F5'></div>
</li>
<li>
  <div class='weisse-taste' id='G5'></div>
  <span id='F#5'></span>
</li>
<li>
  <div class='weisse-taste' id='A5'></div>
  <span id='G#5'></span>
</li>
<li>
  <div class='weisse-taste' id='B5'></div>
  <span id='A#5'></span>
</li>
`;
