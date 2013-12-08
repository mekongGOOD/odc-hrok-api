var restify = require('restify');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('odc', 'test' , 'test', {
  define: {
    freezeTableName: true
  }
});

var wp_map_national_election_2013 = sequelize.define('wp_map_national_election_2013', {
    code: { type: Sequelize.INTEGER, primaryKey: true},
    name: Sequelize.STRING,
    kh_name: Sequelize.STRING,
    eligible_voters : Sequelize.INTEGER,
    valid_voters : Sequelize.INTEGER,
    eligible_voters : Sequelize.INTEGER,
    valid_vote : Sequelize.INTEGER,
    total_seat : Sequelize.INTEGER,
    party_cnp : Sequelize.INTEGER,
    party_fcp : Sequelize.INTEGER,
    party_rdp : Sequelize.INTEGER,
    party_cpp : Sequelize.INTEGER,
    party_edp : Sequelize.INTEGER,
    party_kapp : Sequelize.INTEGER,
    party_cnrp : Sequelize.INTEGER,
    party_ldp : Sequelize.INTEGER,
    seat_cpp : Sequelize.INTEGER,
    seat_cnrp : Sequelize.INTEGER,
    total : Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

function getElection(req, res, next) {
  var codeValue = req.params.code
  election.findAll({ where: { code: codeValue } }).success(function(election) {
      res.send(election);
  });
}

function getElections(req, res, next) {
  var codeValue = req.params.code
  var page = req.params.page
  var per_page = req.params.per_page
  election.findAll({offset: page * per_page, limit: per_page}).success(function(elections) {
      res.send(elections);
  });
}

// /elections?startIndex=0&noResults=100

// election/2013/
// election/


var server = restify.createServer();
server.use(restify.queryParser());
server.get('/election/:code', getElection);
server.get('/election', getElections);

server.listen(9090, function() {
  console.log('%s listening at %s', server.name, server.url);
});