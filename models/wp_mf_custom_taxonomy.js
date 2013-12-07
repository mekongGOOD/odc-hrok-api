/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_mf_custom_taxonomy', { 
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: null
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    arguments: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  });
};
