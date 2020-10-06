const audio = {};

export const AUDIO_UP = 'up';
export const AUDIO_RIGHT = 'right';
export const AUDIO_LEFT = 'left';
export const AUDIO_DOWN = 'down';
export const AUDIO_ERROR = 'error';
export const AUDIO_TRIUMPH = 'triumph';

const initAudio = () => {
  console.log('audio init');

  audio[AUDIO_UP] = new Audio('./sounds/up.mp3');
  audio[AUDIO_DOWN] = new Audio('./sounds/down.mp3');
  audio[AUDIO_LEFT] = new Audio('./sounds/left.mp3');
  audio[AUDIO_RIGHT] = new Audio('./sounds/right.mp3');
  audio[AUDIO_ERROR] = new Audio('./sounds/error.mp3');
  audio[AUDIO_TRIUMPH] = new Audio('./sounds/triumph.mp3');
};

const play = (key) => {
  Object.values(audio).map((item) => {
    item.pause();
    // eslint-disable-next-line no-param-reassign
    item.currentTime = 0;
  });
  console.log(audio[key]);

  const playPromise = audio[key].play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        console.log('audio played auto');
      })
      .catch((error) => {
        console.log(error);

        console.log('playback prevented');
      });
  }
};

const audioStore = {
  audio,
  initAudio,
  play,
};

export default audioStore;
