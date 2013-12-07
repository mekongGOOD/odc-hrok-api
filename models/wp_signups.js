/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_signups', { 
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    activated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    activation_key: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    meta: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  });
};
