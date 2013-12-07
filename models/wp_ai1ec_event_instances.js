/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ai1ec_event_instances', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null
    }
  });
};
