/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_comments', { 
    comment_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    comment_post_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    comment_author: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    comment_author_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_author_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_author_IP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    comment_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    comment_karma: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    comment_approved: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '1'
    },
    comment_agent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment_parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
