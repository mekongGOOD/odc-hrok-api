/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_communes', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    c_code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    c_name_en: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    c_tier_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    c_name_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });
};
