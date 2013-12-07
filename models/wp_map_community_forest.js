/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_community_forest', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    com_forest_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    com_forest_hectares: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    com_forest_commune: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    com_forest_district: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    com_forest_province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    com_forest_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null
    },
    com_forest_related_docs: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    com_forest_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    cancelled: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
