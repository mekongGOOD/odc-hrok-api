/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_national_election_2008', { 
    code: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
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
      type: DataTypes.INTEGER(7),
      allowNull: true,
      defaultValue: '0'
    },
    registered_voters: {
      type: DataTypes.INTEGER(7),
      allowNull: true,
      defaultValue: '0'
    },
    valid_voters: {
      type: DataTypes.INTEGER(7),
      allowNull: true,
      defaultValue: '0'
    },
    valid_vote: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    total_seat: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0'
    },
    party_cpp: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    party_fcp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    party_srp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    party_hr: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    party_nrr: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
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
