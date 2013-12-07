/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_mf_custom_fields', { 
    id: {
      type: DataTypes.INTEGER(19),
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    post_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    custom_group_id: {
      type: DataTypes.INTEGER(19),
      allowNull: false,
      defaultValue: null
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    required_field: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    display_order: {
      type: DataTypes.INTEGER(9),
      allowNull: true,
      defaultValue: '0'
    },
    duplicated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  });
};
