const assert = require('assert');
const app = require('../../src/app');

describe('\'classdemo\' service', () => {
  it('registered the service', () => {
    const service = app.service('classdemo');

    assert.ok(service, 'Registered the service');
  });
});
