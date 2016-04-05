/*
  eslint-env mocha
*/

import * as plugin from '../lib/index.js';
import assert from 'assert';

describe('The plugin', function() {
  this.timeout(10000);

  it('should execute successfully', (done) => {
    plugin.main({
      username: 'ncthis'
    }, (err, result) => {
      assert(!err, 'There should not be any errors');
      assert(result.length > 0, 'result should be an array');
      done();
    })
  })
})

