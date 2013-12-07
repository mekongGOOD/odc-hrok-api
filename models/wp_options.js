/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_options', { 
    option_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    option_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    option_value: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    autoload: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'yes'
    }
  });
};
