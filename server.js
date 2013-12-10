var restify = require('restify');
var Sequelize = require('sequelize');
var models = require('./models');
var SERVER_PORT = 80;

function lowerCase(obj) {
  var newObj = {}
  for (var key in obj.values) {
       newObj[key.toLowerCase()] = obj[key]
  }
  return newObj;
}

function lowerCaseList(list) {
  var newList = []  
  for (var i = 0; i < list.length; i++) {
      newList.push(lowerCase(list[i]));
  }
  return newList;
}

function findOne(req, res, next) {
  var codeValue = req.params.code;
  for (var primaryKey in this.primaryKeys) {
	    break;
  }
  queryDict = {};
  queryDict[primaryKey] = codeValue
  console.log("queryDict=" + queryDict);
  this.findAll({ where: queryDict }).success(function(result) {
      res.send(lowerCase(result[0]));
  });
}

function findAll(req, res, next) {
  var perPage = req.params.hasOwnProperty("per_page") ? req.params.per_page : 10;
  var page = req.params.hasOwnProperty("page") ? req.params.page : 0;
  var queryable = []
  for (var key in this.rawAttributes) {
	  if (this.rawAttributes[key].hasOwnProperty("canQuery")) {
		  queryable.push(key);
	  }
  }
  console.log("queryable=" + queryable);
  queryDict = {}
  for (var key in req.params) {
	  console.log("key:" + key);
	  if (key === "per_page" || key === "page") {
		  console.log("skipping");
		  continue;
	  }
	  for (var i = 0; i < queryable.length; i++) {
		  if (queryable[i].toLowerCase() === key.toLowerCase()) {
			  queryDict[key] = req.params[key];
		  }
	  }
  }
  console.log(queryDict);
  this.findAll({where: queryDict, offset: perPage * page, limit: perPage}).success(function(result) {
      res.send(lowerCaseList(result));
  });
}

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

// Routes for the API

server.get('/census/2013/election/:code', findOne.bind(models.wp_map_national_election_2013));
server.get('/census/2013/election', findAll.bind(models.wp_map_national_election_2013));

server.get('/census/1998/communes/:code', findOne.bind(models.wp_map_census_1998_communes));
server.get('/census/1998/communes', findAll.bind(models.wp_map_census_1998_communes));
server.get('/census/1998/districts/:code', findOne.bind(models.wp_map_census_1998_districts));
server.get('/census/1998/districts', findAll.bind(models.wp_map_census_1998_districts));
server.get('/census/1998/provinces/:code', findOne.bind(models.wp_map_census_1998_provinces));
server.get('/census/1998/provinces', findAll.bind(models.wp_map_census_1998_provinces));
server.get('/census/1998/villages/:code', findOne.bind(models.wp_map_census_1998_villages));
server.get('/census/1998/villages', findAll.bind(models.wp_map_census_1998_villages));

server.get('/census/2008/communes/:code', findOne.bind(models.wp_map_census_2008_communes));
server.get('/census/2008/communes', findAll.bind(models.wp_map_census_2008_communes));
server.get('/census/2008/districts/:code', findOne.bind(models.wp_map_census_2008_districts));
server.get('/census/2008/districts', findAll.bind(models.wp_map_census_2008_districts));
server.get('/census/2008/provinces/:code', findOne.bind(models.wp_map_census_2008_provinces));
server.get('/census/2008/provinces', findAll.bind(models.wp_map_census_2008_provinces));
server.get('/census/2008/villages/:code', findOne.bind(models.wp_map_census_2008_villages));
server.get('/census/2008/villages', findAll.bind(models.wp_map_census_2008_villages));

//serve static files n the /public directory
server.get(/.*/, restify.serveStatic({
    'directory': 'public',
    'default': 'index.html'
}));


server.listen(SERVER_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});

