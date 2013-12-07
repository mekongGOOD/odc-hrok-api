/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_terms', { 
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    term_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
