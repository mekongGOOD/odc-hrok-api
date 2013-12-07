/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_registration_log', { 
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  });
};
