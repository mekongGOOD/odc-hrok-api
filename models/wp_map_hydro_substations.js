/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_hydro_substations', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    hydro_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hydro_fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hydro_commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hydro_district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hydro_province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
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
