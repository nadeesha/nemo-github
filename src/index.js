import 'babel-polyfill';

import getAllUserEvents from './getAllUserEvents.js';
import processResults from './processResults.js';

export function main (options, callback) {
  if (!options.username) {
    callback(new Error('Username not provided'));
  }

  getAllUserEvents(options.username)
    .then(processResults)
    .then(result => callback(null, result))
    .catch(callback);
}