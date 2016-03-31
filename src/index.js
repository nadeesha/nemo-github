import getAllUserEvents from './getAllUserEvents.js';
import processResults from './processResults.js';
import sendResults from './sendResults.js';
import Connector from 'nemo-connector';

const connector = new Connector();

export default function (options) {
  if (!options.username) {
    throw new Error('Username not provided');
  }

  getAllUserEvents(options.username)
    .then(processResults)
    .then(connector.addScores)
    .then(console.log)
    .catch(console.error);
}