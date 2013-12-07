/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_radio_station', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    radio_station_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_network: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_communes: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_district: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_power: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: null
    },
    radio_station_network_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    radio_station_website: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  });
};
