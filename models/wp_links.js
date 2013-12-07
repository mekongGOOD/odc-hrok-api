/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_links', { 
    link_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    link_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_target: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_visible: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Y'
    },
    link_owner: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '1'
    },
    link_rating: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    link_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    link_rel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    link_notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    link_rss: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
