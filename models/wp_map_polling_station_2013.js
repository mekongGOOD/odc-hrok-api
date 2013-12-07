/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_polling_station_2013', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    province_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    district_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    commune_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    village: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    village_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    polling_station_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    polling_station_name_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    num_polling_station: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    polling_station_old_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    polling_station_code_2012: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    registed_voters_2011: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    registed_voters_2012: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    num_voters_deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    total_voters: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    coords: {
      type: 'GEOMETRY',
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
