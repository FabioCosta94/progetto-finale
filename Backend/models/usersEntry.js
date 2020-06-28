'use strict';

module.exports = (sequelize, DataType) => {
  let UsersEntry = sequelize.define('UsersEntry', {
    // id missing because Sequelize adds it by default
    username:  DataType.VARCHAR(20),
    password: DataType.TEXT,
    permissions: DataType.INTEGER(1),

  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'users'
  });

  // Association to other models (foreign keys)
  UsersEntry.associate = function (models) {

  };

  return UsersEntry;
};