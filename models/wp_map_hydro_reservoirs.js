/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_hydro_reservoirs', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    hydro_reservoir_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    hydro_reservoir_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    hydro_reservoir_hectares: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
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
      defaultValue: '0000-00-00 00:00:00'
    }
  });
};
