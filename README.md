##Introduction

This is an API for [Open Development Cambodia (ODC)](http://www.opendevelopmentcambodia.net/ ""). This code has been developed as part of RHoK Sydney Event for Open Development Cambodia over a weekend event on 7 & 8 December 2013.

The Random Hacks of Kindness (RHoK) url is [http://www.rhoksydney.org/](http://www.rhoksydney.org/ "").

<br/>
<hr/>

![rhok.png](_markdown_images/rhok.png "")
##What is RHoK?
RHoK is a global hackathon that takes part twice a year. RHoK brings together thousands of people around the world to create open source solutions that can save lives and alleviate suffering. 

RHoK Sydney events encourage participants to develop solutions that can be used, in particular, to help people prepare for and respond to natural disasters.

![odc.png](_markdown_images/odc.png "")
##Open Development Cambodia
Open Development Cambodia (ODC) is an non-prfot organisation based in Phnom Penh Cambodia. ODC is an **Open Data** website, the first of its kind in Southeast Asia. 

The Open Data movement is based on the simple premise that data collected for public interest should be publicly available to everyone to use and republish as they wish – without restrictions. ODC does not promote any particular perspective, agenda or bias other than to provide objective information about Cambodia and its development.

<br/>
<hr/>
#Instructions

##Installing node.js, this sourcecode and running this app!!

1. Install git:

  `sudo apt-get install git`

2. Install nodejs:

  `sudo apt-get install nodejs`

3. Clone the git repository:

  `git clone https://github.com/mekongGOOD/odc-hrok-api`

4. Copy config.js.example to config.js.

  `cp config.js.example config.js`

5. Configure the database settings in models/config.js with **your** database access details:

	````javascript
	var config = {
	  db: 'odc',
	  userName: 'root',
	  password: 'xxxx',
	  apiServerPort: 80
	}
	````

6. Run the server:

	````
	cd odc-hrok-api
  npm install
  nodejs server.js
  ````
  
  You should see something like;
  
  `restify listening at http://0.0.0.0`
  
7. **Test the API:**

View the API homepage in your web browser http://mysite.com/

To retrieve the census 2008 data (by district) use the following URL in your web browser:

  `http://localhost/census/2008/districts`
  
  You should see some **JSON** data output such as:

  > [{"code":"0102", "name":"Mongkol Borei", "totpop":139315, "males":67967, "females":71348, "density":172.6, "sexratio":95.3, "t_lit15":84.27, "m_lit15":90.61, "f_lit15":78.52, "dependency":67, "pop1564":83406, "mal1564":39950, "fem1564":43456, "fem1549":35905, "tothh":29113, "avg_hs":4.8, "fheads":21.7, "cw_ratio":402.6, "d_own":26930, "d_rent":132, "d_free":1837, "d_oth":151, "t_active":61.08, "m_active":63.95, "f_active":58.38, "t_primsec":77.98, "t_secsec":6.72, "t_tersec":15.31, "m_primsec":75.39, "m_secsec":7.87, "m_tersec":16.74, "f_primsec":80.67, "f_secsec":5.52, "f_tersec":13.81, "t_attend":30.05, "m_attend":32.17, "f_attend":28.05, "t_noeduc":0, "m_noeduc":405, "f_noeduc":576, "m_see":367, "m_speak":116, "m_hear":104, "m_move":804, "m_mental":213, "f_see":375, "f_speak":107, "f_hear":114, "f_move":463, "f_mental":197, "t_uer":1.55, "m_uer":1.16, "f_uer":1.95, "year":2008, "related_docs":"", "last_update":"2012-08-02T03:02:14.000Z"}, ...
  

##Adding new datasets (database tables)

After a new mySQL database table is added, then perform the following steps:

1. Run the sequelize auto script:
 
  `node_modules/sequelize-auto/bin/sequelize-auto -h localhost -d <database> -u <userName> -x <password> -o models`
 
  This will generate mapping into the models directory.
  
2. Modify the generated models to remove unnecessary attributes and to set primary keys. The primary key will be used to lookup individual records from the table.
 
3. Add URL mappings into the odc.js file. The following example is for the `wp_map_national_election_2013` table.
 
  `server.get('/census/2013/election', findAll.bind(models.wp_map_national_election_2013));`
  
  This allow us to look up all election results.
 
  `server.get('/census/2013/election/:code', findOne.bind(models.wp_map_national_election_2013));`
  
  This allow us to look up election results for a particular id (the ID is the primary key of the table).
  
4. Commit changes to git:

  `git commit -a  
  git push`

    
  
  
<hr/>
##The RHOK Team

    
**Analysts/Consultants**
<br/>Josh Lette
<br/>Bronwyn Dennis
<br/>David Han
<br/>Mark Collins
	
**Developers**
<br/>Laurie Tuch
<br/>Tri-Hanh Pham
	
**Project Leader**
<br/>Ian Scrivener
