/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_postmeta', { 
    meta_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    post_id: {
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
