/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_wet_land', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    hectares: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    commune: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    inner_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
