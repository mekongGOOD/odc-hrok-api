/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_national_election_2013_vote_in_communes', { 
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    c_code: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null
    },
    c_name_en: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    c_tier_kh: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    c_name_kh: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    d_code: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: null
    },
    p_code: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: null
    },
    num_polling: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    valid_vote: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null
    },
    party_cnp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_fcp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_rdp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_cpp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_edp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_kapp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_cnrp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    party_ldp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    cpp_margin: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    percent_cpp: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: null
    },
    percent_cnrp: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: null
    },
    winner: {
      type: DataTypes.STRING,
      allowNull: true,
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
