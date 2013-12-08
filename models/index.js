var Sequelize = require('sequelize');
var db = 'odc';
var userName = 'test';
var password = 'test';
var sequelize = new Sequelize(db, userName , password, {
  define: {
    freezeTableName: true
  }
});

var models = [
  'wp_map_census_1998_communes',
  'wp_map_census_1998_districts',
  'wp_map_census_1998_provinces',
  'wp_map_census_1998_villages',
  'wp_map_census_2008_communes',
  'wp_map_census_2008_districts',
  'wp_map_census_2008_provinces',
  'wp_map_census_2008_villages'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

module.exports.sequelize = sequelize;
