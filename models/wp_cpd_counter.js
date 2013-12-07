/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_cpd_counter', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    ip: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null
    },
    page: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: null
    },
    referer: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    country: {
      type: 'CHAR(2)',
      allowNull: false,
      defaultValue: null
    }
  });
};
