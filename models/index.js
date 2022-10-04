const { Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize("seqdb", "root", "", {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.employee = require('../models/employee.model.js')(sequelize, DataTypes);
db.student = require('../models/student.model.js')(sequelize, DataTypes, Model);


db.sequelize.sync({ force: true });
  
module.exports = db ;