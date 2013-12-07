/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ai1ec_event_feeds', { 
    feed_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    feed_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    feed_category: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    feed_tags: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    }
  });
};
