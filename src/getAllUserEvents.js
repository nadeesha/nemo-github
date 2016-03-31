import superagent from 'superagent';

const resultsPerPage = 30;

export default function getEvents (username, pageNumber, previousResults = []) {
  return new Promise((resolve, reject) => {
    if (!username) {
      reject('Username not provided');
    }

    const urlParts =
      [
        `https://api.github.com/users/${username}/events?`,
        pageNumber ? `page=${pageNumber}` : '',
      ];

    superagent
      .get(urlParts.join(''))
      .end((err, response) => {
        if (err) {
          return reject(err);
        }

        const results = response.body;

        if (results.length < 30) {
          return resolve(results.concat(previousResults));
        }

        return getEvents(username, pageNumber++, results.concat(previousResults))
          .then(resolve)
      });
  });
}