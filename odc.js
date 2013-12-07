
var restify = require('restify');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('odc', 'test' , 'test', {
  define: {
    freezeTableName: true
  }
});

var wp_map_census_1998_communes = sequelize.define('wp_map_census_1998_communes', {
  CODE: { type: Sequelize.INTEGER, primaryKey: true},
  NAME: Sequelize.STRING,
  TOTPOP: Sequelize.FLOAT,
  MALES: Sequelize.FLOAT,
  FEMALES: Sequelize.FLOAT,
  DENSITY: Sequelize.FLOAT,
  SEXRATIO: Sequelize.FLOAT,
  T_LIT15: Sequelize.FLOAT,
  M_LIT15: Sequelize.FLOAT,
  F_LIT15: Sequelize.FLOAT,
  DEPENDENCY: Sequelize.FLOAT,
  POP1564: Sequelize.FLOAT,
  MAL1564: Sequelize.FLOAT,
  FEM1564: Sequelize.FLOAT,
  FEM1549: Sequelize.FLOAT,
  TOTHH: Sequelize.FLOAT,
  AVG_HS: Sequelize.FLOAT,
  FHEADS: Sequelize.FLOAT,
  T_ACTIVE: Sequelize.FLOAT,
  M_ACTIVE: Sequelize.FLOAT,
  F_ACTIVE: Sequelize.FLOAT,
  T_PRIMSEC: Sequelize.FLOAT,
  T_SECSEC: Sequelize.FLOAT,
  T_TERSEC: Sequelize.FLOAT,
  M_PRIMSEC: Sequelize.FLOAT,
  M_SECSEC: Sequelize.FLOAT,
  M_TERSEC: Sequelize.FLOAT,
  F_PRIMSEC: Sequelize.FLOAT,
  F_SECSEC: Sequelize.FLOAT,
  F_TERSEC: Sequelize.FLOAT,
  T_ATTEND: Sequelize.FLOAT,
  M_ATTEND: Sequelize.FLOAT,
  F_ATTEND: Sequelize.FLOAT,
  T_NOEDUC: Sequelize.FLOAT,
  M_NOEDUC: Sequelize.FLOAT,
  F_NOEDUC: Sequelize.FLOAT,
  ELIFE: Sequelize.FLOAT,
  T_UER: Sequelize.FLOAT,
  M_UER: Sequelize.FLOAT,
  F_UER: Sequelize.FLOAT,
  Toilet_YES: Sequelize.FLOAT,
  Toilet_NO: Sequelize.FLOAT,
  YEAR: Sequelize.FLOAT,
  last_update: Sequelize.DATE
})

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

var wp_map_census_2008_districts = 	sequelize.define('wp_map_census_2008_districts', {
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


var wp_map_census_2008_provinces = 	sequelize.define('wp_map_census_2008_provinces', {
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


var wp_map_census_2008_villages = 	sequelize.define('wp_map_census_2008_villages', {
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


var wp_map_census_districts = 	sequelize.define('wp_map_census_districts', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    district_id: Sequelize.STRING,
    district_name: Sequelize.STRING,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_communes = 	sequelize.define('wp_map_census_eco_2011_communes', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_districts = 	sequelize.define('wp_map_census_eco_2011_districts', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_provinces = 	sequelize.define('wp_map_census_eco_2011_provinces', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_provinces = 	sequelize.define('wp_map_census_provinces', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    province_id: Sequelize.STRING,
    province_name: Sequelize.STRING,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

function lowerCase(obj) {
  var key, keys = Object.keys(obj);
  var n = keys.length;
  var newobj={}
  while (n--) {
    key = keys[n];
    newobj[key.toLowerCase()] = obj[key];
  }
  return newobj;
}

function findOne(req, res, next) {
  var codeValue = req.params.code
  this.findAll({ where: { code: codeValue } }).success(function(result) {
      res.send(result[0]);
  });
}

function findAll(req, res, next) {
  var perPage = 10;
  var page = 0;
  this.findAll({offset: perPage * page, limit: perPage}).success(function(result) {
      res.send(result);
  });
}

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/census/2013/election/:code', findOne.bind(wp_map_national_election_2013));
server.get('/census/2013/election', findAll.bind(wp_map_national_election_2013));

server.get('/census/1998/commune/:code', findOne.bind(wp_map_census_1998_communes));
server.get('/census/1998/communes', findAll.bind(wp_map_census_1998_communes));
//server.get('/census/1998/districts/:code', findOne.bind(wp_map_census_1998_districts));
//server.get('/census/1998/districts', findAll.bind(wp_map_census_1998_districts));
//server.get('/census/1998/provinces/:code', findOne.bind(wp_map_census_1998_provinces));
//server.get('/census/1998/provinces', findAll.bind(wp_map_census_1998_provinces));
//server.get('/census/1998/villages/:code', findOne.bind(wp_map_census_1998_villages));
//server.get('/census/1998/villages', findAll.bind(wp_map_census_1998_villages));

server.get('/census/2008/commune/:code', findOne.bind(wp_map_census_2008_communes));
server.get('/census/2008/communes', findAll.bind(wp_map_census_2008_communes));
server.get('/census/2008/districts/:code', findOne.bind(wp_map_census_2008_districts));
server.get('/census/2008/districts', findAll.bind(wp_map_census_2008_districts));
server.get('/census/2008/provinces/:code', findOne.bind(wp_map_census_2008_provinces));
server.get('/census/2008/provinces', findAll.bind(wp_map_census_2008_provinces));
server.get('/census/2008/villages/:code', findOne.bind(wp_map_census_2008_villages));
server.get('/census/2008/villages', findAll.bind(wp_map_census_2008_villages));


server.listen(9090, function() {
  console.log('%s listening at %s', server.name, server.url);
});

