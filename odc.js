
var restify = require('restify');
var Sequelize = require('sequelize');


var models = require('./models');



function lowerCaseList(list) {
  newList = []  
    for (var i = 0; i < list.length; i++) {
      newList.push(lowerCase(list[i]));
  }
  return newList;
}

function lowerCase(obj) {
  newObj = {}
  for(var key in obj.values) {
    if (obj.hasOwnProperty(key)) {
       newObj[key.toLowerCase()] = obj[key]
    }
  }
  console.log(obj);
  return newObj;
}

function findOne(req, res, next) {
  var codeValue = req.params.code
  this.findAll({ where: { code: codeValue } }).success(function(result) {
      res.send(lowerCase(result[0]));
  });
}

function findAll(req, res, next) {
  var perPage = req.params.hasOwnProperty("per_page") ? req.params.per_page : 10;
  var page = req.params.hasOwnProperty("page") ? req.params.page : 0;
  this.findAll({offset: perPage * page, limit: perPage}).success(function(result) {
      res.send(lowerCaseList(result));
  });
}

console.log(models.wp_ai1ec_event_category_colors);

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/census/2013/election/:code', findOne.bind(models.wp_map_national_election_2013));
server.get('/census/2013/election', findAll.bind(models.wp_map_national_election_2013));

server.get('/census/1998/commune/:code', findOne.bind(models.wp_map_census_1998_communes));
server.get('/census/1998/communes', findAll.bind(models.wp_map_census_1998_communes));
//server.get('/census/1998/districts/:code', findOne.bind(wp_map_census_1998_districts));
//server.get('/census/1998/districts', findAll.bind(wp_map_census_1998_districts));
//server.get('/census/1998/provinces/:code', findOne.bind(wp_map_census_1998_provinces));
//server.get('/census/1998/provinces', findAll.bind(wp_map_census_1998_provinces));
//server.get('/census/1998/villages/:code', findOne.bind(wp_map_census_1998_villages));
//server.get('/census/1998/villages', findAll.bind(wp_map_census_1998_villages));

server.get('/census/2008/commune/:code', findOne.bind(models.wp_map_census_2008_communes));
server.get('/census/2008/communes', findAll.bind(models.wp_map_census_2008_communes));
server.get('/census/2008/districts/:code', findOne.bind(models.wp_map_census_2008_districts));
server.get('/census/2008/districts', findAll.bind(models.wp_map_census_2008_districts));
server.get('/census/2008/provinces/:code', findOne.bind(models.wp_map_census_2008_provinces));
server.get('/census/2008/provinces', findAll.bind(models.wp_map_census_2008_provinces));
server.get('/census/2008/villages/:code', findOne.bind(models.wp_map_census_2008_villages));
server.get('/census/2008/villages', findAll.bind(models.wp_map_census_2008_villages));


server.listen(9090, function() {
  console.log('%s listening at %s', server.name, server.url);
});

