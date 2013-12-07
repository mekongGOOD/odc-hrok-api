/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_mining_concession', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    mining_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_nature: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_director_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_director_nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_regitration: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_website: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    mining_contract_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    mining_hectares: {
      type: 'DOUBLE',
      allowNull: true,
      defaultValue: null
    },
    mining_location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_inv_purpose: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    mining_duration: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    mining_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    mining_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    mining_inner_coords: {
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
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    concession_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '2'
    },
    cancelled: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    mining_admin_status: {
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
