/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_hot_land_dispute', { 
    hld_strong_shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    hld_strong_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_owner: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_hectares: {
      type: 'DOUBLE',
      allowNull: true,
      defaultValue: null
    },
    hld_strong_commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_purpose: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hld_strong_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    hld_strong_related_docs: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  });
};
