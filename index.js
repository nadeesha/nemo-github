import getAllUserEvents from './getAllUserEvents.js';
import processResults from './processResults.js';
import sendResults from './sendResults.js';
import Connector from 'nemo-connector';

const connector = new Connector();

getAllUserEvents('ncthis')
  .then(processResults)
  .then(connector.addScores)
  .then(console.log)
  .catch(console.error);