/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_mf_custom_groups', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    post_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    duplicated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    expanded: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  });
};
