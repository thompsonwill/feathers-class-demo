// Initializes the `classdemo` service on path `/classdemo`
const { Classdemo } = require('./classdemo.class');
const hooks = require('./classdemo.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/classdemo', new Classdemo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('classdemo');

  service.hooks(hooks);
};
