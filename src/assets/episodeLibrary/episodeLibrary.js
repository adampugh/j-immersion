import THAlohaState from '../images/terrace-house-aloha-state.jpg';
import THOpeningNewDoors from '../images/terrace-house-opening-new-doors.jpg';

import Hell22 from '../audio/hell22.wav';
import Beat31 from '../audio/beat31.wav';
import Beat38 from '../audio/beat38.wav';
import Beat48 from '../audio/beat48.wav';
import Ice3Raw from '../audio/ice3raw.mp3';
import Ice9 from '../audio/ice9.wav';

// need obj format
// { id: 'th_aloha_state_s1e4', img: THAlohaState, file: THAlohaStateS1E4 }

const episodeLibrary = [
    { id: 'th_aloha_state_s1e1', img: THAlohaState, audio: Hell22 },
    { id: 'th_aloha_state_s1e2', img: THAlohaState, audio: Ice9 },
    { id: 'th_aloha_state_s1e3', img: THAlohaState, audio: Beat48 },
    { id: 'th_opening_doors_s1e1', img: THOpeningNewDoors, audio: Ice3Raw },
];

export default episodeLibrary;

// const audioLibrary = [Hell22, Beat31, Beat38, Beat48, Ice3Raw, Ice9];
// export default audioLibrary;
