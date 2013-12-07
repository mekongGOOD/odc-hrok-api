/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_protected_areas', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    pa_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    pa_hectares: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    pa_provinces: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    pa_designation: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    pa_auth: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    pa_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null
    },
    pa_related_docs: {
      type: DataTypes.STRING,
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
