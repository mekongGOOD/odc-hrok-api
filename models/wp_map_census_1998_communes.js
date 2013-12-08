/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_census_1998_communes', { 
    CODE: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
	  canQuery : true,
	  primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      canQuery: true
    },
    TOTPOP: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    MALES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    FEMALES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    DENSITY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    SEXRATIO: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_LIT15: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_LIT15: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_LIT15: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    DEPENDENCY: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    POP1564: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    MAL1564: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM1564: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM1549: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    TOTHH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    AVG_HS: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    FHEADS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    T_ACTIVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    M_ACTIVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_ACTIVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    T_PRIMSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_SECSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_TERSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_PRIMSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_SECSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_TERSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_PRIMSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_SECSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_TERSEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_ATTEND: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_ATTEND: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_ATTEND: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_NOEDUC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_NOEDUC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    F_NOEDUC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    ELIFE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    T_UER: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    M_UER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_UER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    Toilet_YES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    Toilet_NO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    YEAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '2008',
	  canQuery : true
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
