/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_hydro_lines', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    hydro_lines_kv_size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    hydro_lines_status: {
      type: DataTypes.STRING,
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
    cancelled: {
      type: DataTypes.INTEGER(11),
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
