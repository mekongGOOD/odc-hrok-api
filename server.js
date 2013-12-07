var restify = require('restify');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('odc', 'root' , 'tritri', {
  define: {
    freezeTableName: true
  }
});

var wp_map_census_2008_communes = 	sequelize.define('wp_map_census_2008_communes', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    CODE: Sequelize.STRING,
    NAME: Sequelize.STRING,
    TOTPOP : Sequelize.FLOAT,
    MALES : Sequelize.FLOAT,
    FEMALES : Sequelize.FLOAT,
    DENSITY : Sequelize.FLOAT,
    SEXRATIO : Sequelize.FLOAT,
    T_LIT15 : Sequelize.FLOAT,
    M_LIT15 : Sequelize.FLOAT,
    F_LIT15 : Sequelize.FLOAT,
    DEPENDENCY : Sequelize.FLOAT,
    POP1564 : Sequelize.FLOAT,
    MAL1564 : Sequelize.FLOAT,
    FEM1564 : Sequelize.FLOAT,
    FEM1549 : Sequelize.FLOAT,
    TOTHH : Sequelize.FLOAT,
    AVG_HS : Sequelize.FLOAT,
    FHEADS : Sequelize.FLOAT,
    CW_RATIO: Sequelize.FLOAT,
    D_OWN : Sequelize.FLOAT,
	D_RENT : Sequelize.FLOAT,
    D_FREE : Sequelize.FLOAT,
    D_OTH : Sequelize.FLOAT,
    T_ACTIVE : Sequelize.FLOAT,
    M_ACTIVE : Sequelize.FLOAT,
    F_ACTIVE : Sequelize.FLOAT,
    T_PRIMSEC : Sequelize.FLOAT,
    T_SECSEC: Sequelize.FLOAT,
    T_TERSEC : Sequelize.FLOAT,
	M_PRIMSEC : Sequelize.FLOAT,
    M_SECSEC : Sequelize.FLOAT,
    M_TERSEC : Sequelize.FLOAT,
    F_PRIMSEC : Sequelize.FLOAT,
    F_SECSEC : Sequelize.FLOAT,
    F_TERSEC : Sequelize.FLOAT,
    T_ATTEND : Sequelize.FLOAT,
    M_ATTEND: Sequelize.FLOAT,
    F_ATTEND : Sequelize.FLOAT,
	T_NOEDUC : Sequelize.FLOAT,
    M_NOEDUC: Sequelize.FLOAT,
    F_NOEDUC : Sequelize.FLOAT,
	M_SEE : Sequelize.FLOAT,
    M_SPEAK : Sequelize.FLOAT,
    M_HEAR : Sequelize.FLOAT,
    M_MOVE : Sequelize.FLOAT,
    M_MENTAL : Sequelize.FLOAT,
    F_SEE : Sequelize.FLOAT,
    F_SPEAK : Sequelize.FLOAT,
    F_HEAR: Sequelize.FLOAT,
    F_MOVE : Sequelize.FLOAT,
	F_MENTAL : Sequelize.FLOAT,
    T_UER : Sequelize.FLOAT,
    M_UER : Sequelize.FLOAT,
    F_UER : Sequelize.FLOAT,
    YEAR : Sequelize.FLOAT,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})


function getElection(req, res, next) {
  var codeValue = req.params.shape_id
  wp_map_census_2008_communes.findAll({ where: { shape_id: codeValue } }).success(function(election) {
      res.send(election);
  });
}

function getElections(req, res, next) {
  var codeValue = req.params.shape_id
  var page = req.params.page
  var per_page = req.params.per_page
  wp_map_census_2008_communes.findAll({offset: page * per_page, limit: per_page}).success(function(elections) {
      res.send(elections);
  });
}

// /elections?startIndex=0&noResults=100

// election/2013/
// election/


var server = restify.createServer();
server.use(restify.queryParser());
server.get('/election/:shape_id', getElection);
server.get('/election', getElections);

server.listen(9090, function() {
  console.log('%s listening at %s', server.name, server.url);
});