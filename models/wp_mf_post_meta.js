/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_mf_post_meta', { 
    meta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    group_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    field_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    field_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    }
  });
};
