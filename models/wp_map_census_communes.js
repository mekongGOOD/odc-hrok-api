/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_census_communes', { 
    commune_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
	  canQuery : true
    },
    commune_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
	  canQuery : true
    },
    related_docs: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
