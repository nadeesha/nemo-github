import getAllUserEvents from './getAllUserEvents.js';
import processResults from './processResults.js';

export default function (options, callback) {
  if (!options.username) {
    callback(new Error('Username not provided'));
  }

  getAllUserEvents(options.username)
    .then(processResults)
    .then(result => callback(null, result))
    .catch(callback);
}