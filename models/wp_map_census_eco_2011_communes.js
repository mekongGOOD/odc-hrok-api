/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_census_eco_2011_communes', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    code_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    establishments_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    total_persons_engaged: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    male_persons_engaged: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    female_persons_engaged: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    inner_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.TEXT,
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
