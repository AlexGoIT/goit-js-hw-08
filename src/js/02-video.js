import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = "videoplayer-current-time";

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate() {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(STORAGE_KEY, seconds);
  });
}
