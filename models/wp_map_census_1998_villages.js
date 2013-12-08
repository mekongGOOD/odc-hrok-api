/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_map_census_1998_villages', { 
    CODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
	  canQuery : true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
	  canQuery : true
    },
    TOTHH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MALES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEMALES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    TOTPOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    M_LIT_15: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    M_ATT_6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_LIT_15: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_ATT_6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_HEAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_0_4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_5_9: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_10_14: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_15_19: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_20_24: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_25_29: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_30_34: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_35_39: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_40_44: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_45_49: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_50_54: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_55_59: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_60_64: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_65_69: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_70_74: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    MAL_75: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_0_4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_5_9: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_10_14: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_15_19: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_20_24: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_25_29: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_30_34: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_35_39: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_40_44: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_45_49: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_50_54: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_55_59: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_60_64: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_65_69: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_70_74: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    FEM_75: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    O_OWNER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    O_RENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    O_FREE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    O_OTHER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    M_ATT_NOW: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    F_ATT_NOW: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
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
