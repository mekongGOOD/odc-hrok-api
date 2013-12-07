/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blc_synch', { 
    container_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null
    },
    container_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    synched: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: null
    },
    last_synch: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  });
};
