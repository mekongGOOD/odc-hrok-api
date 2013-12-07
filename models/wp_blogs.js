/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blogs', { 
    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    site_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    public: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    archived: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    mature: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    spam: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    deleted: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    lang_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
