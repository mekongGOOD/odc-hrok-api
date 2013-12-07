/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ai1ec_events', { 
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
      allowNull: true,
      defaultValue: null
    },
    allday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null
    },
    recurrence_rules: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    exception_rules: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    recurrence_dates: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    exception_dates: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    show_map: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    ical_feed_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    ical_source_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    ical_organizer: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    ical_contact: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    ical_uid: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });
};
