import read from './reader';
import json from './paper';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const jsonData = await json(data);
    return jsonData;
  }
}
