/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_users', { 
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_nicename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    user_activation_key: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    spam: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    deleted: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
