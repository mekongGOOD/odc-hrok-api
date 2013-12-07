/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ai1ec_event_category_colors', { 
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null
    },
    term_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    }
  });
};
