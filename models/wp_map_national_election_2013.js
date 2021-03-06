/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_national_election_2013', { 
    code: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    kh_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eligible_voters: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    registered_voters: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    valid_voters: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    valid_vote: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    total_seat: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    seat_cpp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    seat_cnrp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    total: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null
    },
    related_docs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
