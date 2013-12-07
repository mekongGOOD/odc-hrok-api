/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_site', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
