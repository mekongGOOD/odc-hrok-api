/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_provinces', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    p_code: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null
    },
    p_name_en: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    p_tier_kh: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    p_name_kh: {
      type: DataTypes.STRING,
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
