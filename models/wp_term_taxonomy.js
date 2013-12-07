/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_term_taxonomy', { 
    term_taxonomy_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    taxonomy: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
