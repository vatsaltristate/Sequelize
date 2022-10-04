// const { DataTypes } = require('sequelize');
// const sequelize = require('../models/index.js');

module.exports = (sequelize, DataTypes) => {

const Employee = sequelize.define('Employee', {
  // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            primarykey: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone :{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, 
        {
            tableName: 'Employees',
            timestamps: true,
            freezeTableName: true

        });

console.log(Employee === sequelize.models.Employee);

}