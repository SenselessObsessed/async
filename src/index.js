import GameSavingLoader from './js/GameSavingLoader';

// GameSavingLoader.load().then((saving) => {
//     JSON.parse(saving);
// }, (error) => {
//     throw new Error(error)
// });

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return JSON.parse(saving);
  } catch (error) {
    throw new Error(error);
  }
})();
