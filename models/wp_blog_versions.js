/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blog_versions', { 
    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    db_version: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  });
};
