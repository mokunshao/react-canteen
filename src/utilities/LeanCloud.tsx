import LC from 'leancloud-storage';

const APP_ID = 'x0vDpF24CaWvqROtxUFwreg2-gzGzoHsz';
const APP_KEY = 'IimT78gljN4nGnEq4hCffUXw';

LC.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

export default LC;
