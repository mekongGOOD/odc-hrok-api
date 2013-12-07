/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_administrative_boundary', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    kh_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    boundary_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    population: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      defaultValue: null
    },
    area_in_m2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    density_per_km2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    fill_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    coords: {
      type: 'GEOMETRY',
      allowNull: false,
      defaultValue: null
    },
    inner_coords: {
      type: 'GEOMETRY',
      allowNull: true,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
