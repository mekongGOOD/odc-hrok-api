/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_sitemeta', { 
    meta_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    site_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    meta_key: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    meta_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  });
};
