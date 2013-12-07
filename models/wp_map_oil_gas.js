/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_oil_gas', { 
    oil_gas_shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    oil_gas_block_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    oil_gas_operator: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    oil_gas_cooperator: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    oil_gas_status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    oil_gas_award_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    oil_gas_deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    oil_gas_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_sqkms: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      defaultValue: null
    },
    oil_gas_on_shore: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_pending: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_basin_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_offered: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_co1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_co2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_co3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_co4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_co5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_inner_coords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    oil_gas_related_docs: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    concession_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '4'
    },
    cancelled: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    oil_gas_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    oil_gas_commune: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    oil_gas_district: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    oil_gas_province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  });
};
