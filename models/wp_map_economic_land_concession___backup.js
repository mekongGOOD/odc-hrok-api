/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_economic_land_concession___backup', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    elc_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_nature: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_director_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_director_nationality: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_regitration: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_contract_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    elc_hectares: {
      type: 'DOUBLE',
      allowNull: true,
      defaultValue: null
    },
    elc_commune: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    elc_district: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    elc_province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    elc_region_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    elc_inv_purpose: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    elc_legal_papers_and_right: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    elc_land_utilization_plan: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    elc_implementation_after_contract: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    elc_measures_of_ministry: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    elc_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    elc_inner_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    tiers: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    elc_website: {
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
      allowNull: false,
      defaultValue: '1'
    },
    cancelled: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    cancelled_doc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    elc_admin_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    overlays: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    elc_related_docs: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  });
};
