/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_national_election_2003', { 
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
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null
    },
    registered_voters: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null
    },
    valid_voters: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null
    },
    valid_vote: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null
    },
    total_seat: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null
    },
    party_cpp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null
    },
    party_fcp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null
    },
    party_srp: {
      type: DataTypes.INTEGER(1),
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
