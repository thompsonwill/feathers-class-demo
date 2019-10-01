const classdemo = require('./classdemo/classdemo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(classdemo);
};
