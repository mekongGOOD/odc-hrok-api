/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blc_instances', { 
    instance_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    link_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    container_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    container_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'post'
    },
    link_text: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    parser_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'link'
    },
    container_field: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_context: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    raw_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    }
  });
};
