/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_posts', { 
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    post_author: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    post_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'publish'
    },
    comment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'open'
    },
    ping_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'open'
    },
    post_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    to_ping: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    pinged: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    post_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    post_content_filtered: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    post_parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    guid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    menu_order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    post_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'post'
    },
    post_mime_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
