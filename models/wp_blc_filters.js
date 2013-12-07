/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blc_filters', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    }
  });
};
