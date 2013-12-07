/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_districts', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    d_code: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: null
    },
    d_name_en: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    d_tier_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    d_name_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });
};
