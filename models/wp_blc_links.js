/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_blc_links', { 
    link_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    first_failure: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_check: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_success: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_check_attempt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    check_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    final_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    redirect_count: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    http_code: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    status_code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    status_text: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    request_duration: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    timeout: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    broken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    may_recheck: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    being_checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    result_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    false_positive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    dismissed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
