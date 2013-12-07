/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_sez_2', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    sez_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_village: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_hectares: {
      type: 'DOUBLE',
      allowNull: true,
      defaultValue: null
    },
    sez_capital: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    sez_zone_developer: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_cdc_no: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_cdc_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    sez_sub_no: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    sez_sub_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    sez_project_implement: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    sez_zone_invetor: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    sez_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    concession_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3'
    },
    tiers: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    cancelled: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    sez_admin_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
