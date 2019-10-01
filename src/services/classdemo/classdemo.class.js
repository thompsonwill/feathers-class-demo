const { Service } = require('feathers-mongodb');

exports.Classdemo = class Classdemo extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('classdemo');
    });
  }
};
