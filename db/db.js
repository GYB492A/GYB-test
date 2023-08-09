module.exports = function () {
  return new Promise((resolve, reject) => {
    const mongoose = require('mongoose');
    const { DBHOST, DBPORT, DBNAME } = require('../config/config.js');

    mongoose.set('strictQuery', true);

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    mongoose.connection.once('open', () => {
      resolve();
    });

    mongoose.connection.on('error', (err) => {
      reject(err);
    });

    mongoose.connection.on('close', () => {
      console.log('连接关闭');
    });
  });
};
